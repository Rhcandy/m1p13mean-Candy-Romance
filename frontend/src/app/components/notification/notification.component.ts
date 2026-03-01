import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, NotificationAction } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notification-container">
      <div
        *ngFor="let notification of notifications$ | async"
        class="notification notification-{{ notification.type }}"
        [class.fade-in]="true"
      >
        <div class="notification-header">
          <span class="notification-title">{{ notification.title }}</span>
          <button class="notification-close" (click)="remove(notification.id, $event)">x</button>
        </div>
        <div class="notification-message">{{ notification.message }}</div>

        <div class="notification-actions" *ngIf="notification.actions?.length">
          <button
            *ngFor="let action of notification.actions"
            class="notification-action"
            [ngClass]="getActionClass(action)"
            (click)="onAction(notification.id, action, $event)"
          >
            {{ action.label }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .notification-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 420px;
      }

      .notification {
        background: white;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-left: 4px solid;
        transition: all 0.3s ease;
        animation: slideIn 0.3s ease;
      }

      .notification:hover {
        transform: translateX(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      }

      .notification-success {
        border-left-color: #28a745;
      }

      .notification-error {
        border-left-color: #dc3545;
      }

      .notification-warning {
        border-left-color: #ffc107;
      }

      .notification-info {
        border-left-color: #17a2b8;
      }

      .notification-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .notification-title {
        font-weight: 600;
        font-size: 14px;
      }

      .notification-success .notification-title {
        color: #28a745;
      }

      .notification-error .notification-title {
        color: #dc3545;
      }

      .notification-warning .notification-title {
        color: #b45309;
      }

      .notification-info .notification-title {
        color: #17a2b8;
      }

      .notification-close {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        opacity: 0.6;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .notification-close:hover {
        opacity: 1;
      }

      .notification-message {
        font-size: 13px;
        color: #666;
        line-height: 1.4;
      }

      .notification-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 12px;
      }

      .notification-action {
        border: 0;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        padding: 6px 10px;
        cursor: pointer;
        transition: opacity 0.2s ease;
      }

      .notification-action:hover {
        opacity: 0.92;
      }

      .action-primary {
        background: #1d4ed8;
        color: #fff;
      }

      .action-secondary {
        background: #e5e7eb;
        color: #111827;
      }

      .action-danger {
        background: #b91c1c;
        color: #fff;
      }

      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @media (max-width: 576px) {
        .notification-container {
          left: 12px;
          right: 12px;
          top: 12px;
          max-width: unset;
        }
      }
    `
  ]
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  notifications$ = this.notificationService.notifications$;

  remove(id: string, event?: Event): void {
    event?.stopPropagation();
    this.notificationService.remove(id);
  }

  onAction(id: string, action: NotificationAction, event: Event): void {
    event.stopPropagation();
    action.onClick?.();
    if (!action.onClick) {
      this.notificationService.remove(id);
    }
  }

  getActionClass(action: NotificationAction): string {
    if (action.style === 'danger') return 'action-danger';
    if (action.style === 'primary') return 'action-primary';
    return 'action-secondary';
  }
}
