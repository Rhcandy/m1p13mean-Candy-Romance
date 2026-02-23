import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { AuthService, RegisterData } from '../../../../services/auth.service';
import { NotificationService } from '../../../../services/notification.service';
import { BoutiqueService } from '../../../../services/boutique.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly boutiqueService = inject(BoutiqueService);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);
  private readonly fb = inject(FormBuilder);
  private readonly cd = inject(ChangeDetectorRef);

  submitted = false;
  loading = false;
  error = '';
  showPassword = false;
  showConfirmPassword = false;

  selectedRole: 'user' | 'admin_boutique' | null = null;
  registerForm!: FormGroup;

  private readonly passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  constructor() {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.fb.group(
      {
        nom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        sexe: ['M', Validators.required],
        numtel: this.fb.array([this.fb.control('')]),
        dtnaissance: ['2000-02-04', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get numtelArray(): FormArray {
    return this.registerForm.get('numtel') as FormArray;
  }

  selectRole(role: 'user' | 'admin_boutique'): void {
    this.selectedRole = role;
  }

  addPhoneNumber(): void {
    this.numtelArray.push(this.fb.control(''));
  }

  removePhoneNumber(index: number): void {
    if (this.numtelArray.length > 1) {
      this.numtelArray.removeAt(index);
    }
  }

  hasValidPhoneNumber(): boolean {
    return this.numtelArray.controls.some((control) => {
      const phoneValue = control.value as string | null;
      return !!phoneValue && phoneValue.trim() !== '';
    });
  }

  isPasswordMismatch(): boolean {
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return this.submitted && !!confirmPassword && this.registerForm.hasError('passwordMismatch');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
    this.error = '';

    if (!this.selectedRole) {
      this.error = 'Veuillez selectionner un type de compte';
      return;
    }

    if (!this.registerForm.valid || !this.hasValidPhoneNumber()) {
      this.error = !this.hasValidPhoneNumber() ? 'Au moins un numero de telephone est requis' : '';
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.value;
    const registerData: RegisterData = {
      nom: formValue.nom?.trim(),
      email: formValue.email?.trim(),
      password: formValue.password,
      role: this.selectedRole,
      sexe: formValue.sexe,
      numtel: (formValue.numtel as string[])
        .map((phone) => phone.trim())
        .filter((phone) => phone !== ''),
      dtnaissance: formValue.dtnaissance
    };

    this.loading = true;

    this.authService.register(registerData).subscribe({
      next: (response) => {
        if (!response?.success) {
          this.error = response?.message || "Erreur lors de l'inscription.";
          this.loading = false;
          this.cd.detectChanges();
          return;
        }

        this.notificationService.success('Succes', 'Compte cree avec succes.');
        this.redirectAfterRegister();
      },
      error: (err) => {
        const errorMessage =
          err?.error?.message || err?.message || "Erreur lors de l'inscription. Veuillez reessayer.";
        this.notificationService.error('Erreur inscription', errorMessage);
        this.error = errorMessage;
        this.loading = false;
        this.cd.detectChanges();
      },
      complete: () => {
        if (!this.authService.hasRole('admin_boutique')) {
          this.loading = false;
          this.cd.detectChanges();
        }
      }
    });
  }

  private redirectAfterRegister(): void {
    if (this.authService.hasRole('user')) {
      this.router.navigate(['/produits']);
      this.loading = false;
      this.cd.detectChanges();
      return;
    }

    if (this.authService.hasRole('admin_boutique')) {
      this.boutiqueService.refreshMyBoutiqueStatus().subscribe({
        next: (status) => {
          if (!status.hasBoutique) {
            this.router.navigate(['/boutique/boxes']);
          } else if (!status.isActive) {
            this.router.navigate(['/boutique/informations']);
          } else {
            this.router.navigate(['/default']);
          }

          this.loading = false;
          this.cd.detectChanges();
        },
        error: () => {
          this.router.navigate(['/default']);
          this.loading = false;
          this.cd.detectChanges();
        }
      });
      return;
    }

    this.router.navigate(['/default']);
    this.loading = false;
    this.cd.detectChanges();
  }
}
