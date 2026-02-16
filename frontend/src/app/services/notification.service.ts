import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notifications.asObservable();

  show(notification: Omit<Notification, 'id'>): void {
    const id = this.generateId();
    const fullNotification: Notification = {
      id,
      duration: 5000,
      ...notification
    };

    const currentNotifications = this.notifications.value;
    this.notifications.next([...currentNotifications, fullNotification]);

    // Auto-remove after duration
    setTimeout(() => {
      this.remove(id);
    }, fullNotification.duration);
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

  remove(id: string): void {
    const currentNotifications = this.notifications.value;
    this.notifications.next(currentNotifications.filter(n => n.id !== id));
  }

  clear(): void {
    this.notifications.next([]);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
