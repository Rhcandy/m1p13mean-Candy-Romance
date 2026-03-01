import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NotificationAction {
  label: string;
  style?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  actions?: NotificationAction[];
  onClose?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notifications.asObservable();
  private timers = new Map<string, ReturnType<typeof setTimeout>>();

  show(notification: Omit<Notification, 'id'>): string {
    const id = this.generateId();
    const defaultDuration = notification.actions?.length ? 0 : 5000;
    const fullNotification: Notification = {
      id,
      duration: defaultDuration,
      ...notification
    };

    const currentNotifications = this.notifications.value;
    this.notifications.next([...currentNotifications, fullNotification]);

    if ((fullNotification.duration || 0) > 0) {
      const timer = setTimeout(() => {
        this.remove(id);
      }, fullNotification.duration);
      this.timers.set(id, timer);
    }

    return id;
  }

  success(title: string, message?: string): void {
    this.show({
      type: 'success',
      title,
      message: message || title
    });
  }

  error(title: string, message?: string): void {
    this.show({
      type: 'error',
      title,
      message: message || title,
      duration: 8000 // Longer for errors
    });
  }

  warning(title: string, message?: string): void {
    this.show({
      type: 'warning',
      title,
      message: message || title
    });
  }

  info(title: string, message?: string): void {
    this.show({
      type: 'info',
      title,
      message: message || title
    });
  }

  confirm(options: {
    title?: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmStyle?: 'primary' | 'danger';
    type?: 'warning' | 'info';
  }): Promise<boolean> {
    return new Promise((resolve) => {
      let isResolved = false;
      const finalize = (value: boolean) => {
        if (isResolved) return;
        isResolved = true;
        resolve(value);
      };

      const id = this.show({
        type: options.type || 'warning',
        title: options.title || 'Confirmation',
        message: options.message,
        duration: 0,
        actions: [
          {
            label: options.cancelLabel || 'Annuler',
            style: 'secondary',
            onClick: () => {
              finalize(false);
              this.remove(id, { skipOnClose: true });
            }
          },
          {
            label: options.confirmLabel || 'Confirmer',
            style: options.confirmStyle || 'primary',
            onClick: () => {
              finalize(true);
              this.remove(id, { skipOnClose: true });
            }
          }
        ],
        onClose: () => finalize(false)
      });
    });
  }

  remove(id: string, options?: { skipOnClose?: boolean }): void {
    const currentNotifications = this.notifications.value;
    const target = currentNotifications.find((notification) => notification.id === id);
    if (!target) return;

    if (!options?.skipOnClose && target.onClose) {
      target.onClose();
    }

    const timer = this.timers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }

    this.notifications.next(currentNotifications.filter((notification) => notification.id !== id));
  }

  clear(): void {
    this.timers.forEach((timer) => clearTimeout(timer));
    this.timers.clear();
    this.notifications.next([]);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
