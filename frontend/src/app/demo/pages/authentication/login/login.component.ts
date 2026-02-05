import { Component, inject } from '@angular/core';
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
  private authService = inject(AuthService);
  private router = inject(Router);

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
        this.router.navigate(['/default']);
      },
      error: () => {
        this.error = 'Email ou mot de passe incorrect';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
