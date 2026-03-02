import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { BoutiqueService } from '../../../../services/boutique.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly boutiqueService = inject(BoutiqueService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  submitted = false;
  loading = false;
  error = '';
  showPassword = false;

  model = {
    email: 'user@gmail.com',
    password: 'user1234'
  };

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  quickLogin(role: 'admin' | 'boutique'): void {
    if (this.loading) {
      return;
    }

    if (role === 'admin') {
      this.model.email = 'admincenter@gmail.com';
      this.model.password = 'admincenter';
    } else {
      this.model.email = 'boutique2@gmail.com';
      this.model.password = 'boutique2';
    }

    this.submitted = false;
    this.error = '';
    this.onSubmit();
  }

  onSubmit(event?: Event): void {
    event?.preventDefault();

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
          this.loading = false;
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
              this.cdr.detectChanges();
            },
            error: () => {
              this.router.navigate(['/default']);
              this.loading = false;
              this.cdr.detectChanges();
            }
          });
          return;
        }

        if (this.authService.isAdminCenterRole()) {
          this.router.navigate(['/default']);
          this.loading = false;
          return;
        }

        this.router.navigate(['/default']);
        this.loading = false;
      },
      error: () => {
        this.error = 'Email ou mot de passe incorrect';
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      complete: () => {
        if (!this.authService.hasRole('admin_boutique')) {
          this.loading = false;
        }
      }
    });
  }
}
