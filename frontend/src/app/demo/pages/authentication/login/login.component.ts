import { Component, inject,ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
   private readonly cdr = inject(ChangeDetectorRef);

  submitted = false;
  loading = false;
  error = '';

  model = {
    email: '',
    password: ''
  };

  onSubmit(event: Event) {
    event.preventDefault(); // 🔥 empêche le GET et l’URL bizarre

    this.submitted = true;
    this.error = '';

    if (!this.model.email || !this.model.password) {
      this.error = 'Email et mot de passe requis';
      return;
    }

    this.loading = true;

    this.authService.login(this.model.email, this.model.password).subscribe({
      next: () => {

        if (this.authService.hasRole('user')) {
          this.router.navigate(['/produits']);
        } else {
          this.router.navigate(['/default']);
        }
      },
      error: () => {
        this.error = 'Email ou mot de passe incorrect';
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
