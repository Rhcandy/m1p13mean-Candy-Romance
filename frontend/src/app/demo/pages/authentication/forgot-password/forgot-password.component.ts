import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  submitted = false;
  loading = false;
  error = '';
  success = '';

  model = {
    email: ''
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
    this.error = '';
    this.success = '';

    if (!this.model.email) {
      this.error = 'Email requis';
      return;
    }

    this.loading = true;

    this.authService.forgotPassword(this.model.email).subscribe({
      next: (res) => {
        this.success = res.message || 'Un code de réinitialisation a été envoyé à votre email.';
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error?.message || 'Une erreur est survenue lors de la demande de réinitialisation.';
        this.loading = false;
      }
    });
  }
}

