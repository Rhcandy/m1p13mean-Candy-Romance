import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, Notification } from '../../services/notification.service';

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
        (click)="remove(notification.id)"
      >
        <div class="notification-header">
          <span class="notification-title">{{ notification.title }}</span>
          <button class="notification-close" (click)="remove(notification.id)">×</button>
        </div>
        <div class="notification-message">{{ notification.message }}</div>
      </div>
    </div>
  `,
  styles: [`
    .notification-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      max-width: 400px;
    }

    .notification {
      background: white;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-left: 4px solid;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: slideIn 0.3s ease;
    }

    .notification:hover {
      transform: translateX(-5px);
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
      color: #ffc107;
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

    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `]
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  notifications$ = this.notificationService.notifications$;

  remove(id: string): void {
    this.notificationService.remove(id);
  }
}
