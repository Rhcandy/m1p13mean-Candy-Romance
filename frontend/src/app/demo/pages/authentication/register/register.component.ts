import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService, RegisterData } from '../../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  submitted = false;
  loading = false;
  error = '';

  selectedRole: 'user' | 'admin_boutique' | null = null;
  avatarFile: File | null = null;

  model = {
    nom: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  selectRole(role: 'user' | 'admin_boutique') {
    this.selectedRole = role;
  }

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.avatarFile = input.files[0];
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;
    this.error = '';

    if (!this.selectedRole) {
      this.error = 'Veuillez sélectionner un type de compte';
      return;
    }

    if (!this.model.nom || !this.model.email || !this.model.password || !this.model.confirmPassword) {
      this.error = 'Veuillez remplir tous les champs obligatoires';
      return;
    }

    if (this.model.password !== this.model.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas';
      return;
    }

    this.loading = true;

    const registerData: RegisterData = {
      nom: this.model.nom,
      email: this.model.email,
      password: this.model.password,
      role: this.selectedRole,
      profilePicture: this.avatarFile || undefined
    };

    this.authService.register(registerData).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = "Erreur lors de l'inscription. Veuillez réessayer.";
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
