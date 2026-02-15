// angular import

import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Router } from '@angular/router';

import { email, Field, form, minLength, required } from '@angular/forms/signals';

import { AuthService, RegisterData } from '../../../../services/auth.service';



@Component({

  selector: 'app-register',

  imports: [CommonModule, RouterModule, Field],

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.scss']

})

export class RegisterComponent {

  private cd = inject(ChangeDetectorRef);

  private authService = inject(AuthService);

  private router = inject(Router);



  submitted = signal(false);

  error = signal('');

  showPassword = signal(false);

  loading = signal(false);

  selectedRole = signal<'user' | 'admin_boutique' | null>(null);

  avatarFile: File | null = null;



  registerModel = signal<{ email: string; password: string; confirmPassword: string; name: string }>({

    name: '',

    email: '',

    password: '',

    confirmPassword: ''

  });



  registerForm = form(this.registerModel, (schemaPath) => {

    required(schemaPath.email, { message: 'Email is required' });

    email(schemaPath.email, { message: 'Enter a valid email address' });

    required(schemaPath.password, { message: 'Password is required' });

    minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters' });

    required(schemaPath.confirmPassword, { message: 'Password confirmation is required' });

    required(schemaPath.name, { message: 'Name is required' });

  });



  onAvatarSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {

      this.avatarFile = input.files[0];

    }

  }



  selectRole(role: 'user' | 'admin_boutique'): void {

    this.selectedRole.set(role);

  }



  onSubmit(event: Event) {

    this.submitted.set(true);

    this.error.set('');



    if (!this.selectedRole()) {

      this.error.set('Veuillez sélectionner un type de compte');

      event.preventDefault();

      return;

    }



    if (this.registerForm.email().invalid() || this.registerForm.password().invalid() || this.registerForm.name().invalid() || this.registerForm.confirmPassword().invalid()) {

      event.preventDefault();

      return;

    }



    // Vérifier que les mots de passe correspondent

    const credentials = this.registerModel();

    if (credentials.password !== credentials.confirmPassword) {

      this.error.set('Les mots de passe ne correspondent pas');

      event.preventDefault();

      return;

    }



    this.loading.set(true);

    event.preventDefault();

    const credentials = this.registerModel();



    const registerData: RegisterData = {

      email: credentials.email,

      password: credentials.password,

      nom: credentials.name,

      role: this.selectedRole()!

    };



    this.authService.register(registerData).subscribe({

      next: (response) => {

        console.log('Registration successful:', response);

        this.router.navigate(['/dashboard']);

      },

      error: (err) => {

        console.error('Registration error:', err);

        this.error.set('Erreur lors de l\'inscription. Veuillez réessayer.');

        this.loading.set(false);

      },

      complete: () => {

        this.loading.set(false);

        this.cd.detectChanges();

      }

    });

  }

}

