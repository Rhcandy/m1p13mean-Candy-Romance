import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  submitted = false;
  loading = false;
  error = '';
  success = '';

  model = {
    email: '',
    code: '',
    newPassword: ''
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
    this.error = '';
    this.success = '';

    if (!this.model.email || !this.model.code || !this.model.newPassword) {
      this.error = 'Tous les champs sont requis';
      return;
    }

    const codeNumber = Number(this.model.code);
    if (isNaN(codeNumber)) {
      this.error = 'Le code doit être un nombre à 6 chiffres';
      return;
    }

    this.loading = true;

    this.authService.resetPassword(this.model.email, codeNumber, this.model.newPassword).subscribe({
      next: (res) => {
        this.success = res.message || 'Mot de passe réinitialisé avec succès.';
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error?.message || 'Une erreur est survenue lors de la réinitialisation.';
        this.loading = false;
      }
    });
  }
}

