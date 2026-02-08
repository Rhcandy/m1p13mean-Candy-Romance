import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService, RegisterData } from '../../../../services/auth.service';
import { NotificationService } from '../../../../services/notification.service';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormsModule,} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);
  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);

  submitted = false;
  loading = false;
  error = '';

  selectedRole: 'user' | 'admin_boutique' | null = null;
  avatarFile: File | null = null;

  registerForm: FormGroup;

  constructor() {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      sexe: ['M', Validators.required],
      numtel: this.fb.array([this.fb.control('', Validators.required)]),
      dtnaissance: ['2000-02-04', Validators.required]
    });
  }

  get numtelArray(): FormArray {
    return this.registerForm.get('numtel') as FormArray;
  }

  selectRole(role: 'user' | 'admin_boutique') {
    this.selectedRole = role;
  }

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.avatarFile = input.files[0];
    }
  }

  // Méthodes pour gérer les numéros de téléphone dynamiques
  addPhoneNumber(): void {
    this.numtelArray.push(this.fb.control(''));
  }

  removePhoneNumber(index: number): void {
    if (this.numtelArray.length > 1) {
      this.numtelArray.removeAt(index);
    }
  }

  // Validation pour s'assurer qu'au moins un numéro est valide
  hasValidPhoneNumber(): boolean {
    return this.numtelArray.controls.some(control => control.value && control.value.trim() !== '');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;
    this.error = '';

    if (!this.selectedRole) {
      this.error = 'Veuillez sélectionner un type de compte';
      return;
    }

    if (!this.registerForm.valid || !this.hasValidPhoneNumber()) {
      this.error = 'Veuillez remplir tous les champs obligatoires';
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas';
      return;
    }

    this.loading = true;

    const formValue = this.registerForm.value;
    const registerData: RegisterData = {
      nom: formValue.nom,
      email: formValue.email,
      password: formValue.password,
      role: this.selectedRole,
      sexe: formValue.sexe,
      numtel: formValue.numtel.filter((phone: string) => phone.trim() !== ''), // Filtrer les numéros vides
      dtnaissance: formValue.dtnaissance,
    };
    
    this.authService.register(registerData).subscribe({
      next: (response: any) => {
        
        if (response.success) {
          this.notificationService.success('Succès', 'Inscription réussie !');
          this.router.navigate(['/default']);
        } else {
          this.notificationService.error('Erreur', response.message || "Erreur lors de l'inscription.");
          this.error = response.message || "Erreur lors de l'inscription.";
        }
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: (err: any) => {
        const errorMessage = err.response?.data?.message || err.message || "Erreur lors de l'inscription. Veuillez réessayer.";
        this.notificationService.error('Erreur d\'inscription', errorMessage);
        this.error = errorMessage;
        this.loading = false;
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
