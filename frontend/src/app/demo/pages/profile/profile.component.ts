import { Component, OnInit, inject,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService, UserProfile, UpdateProfilePayload } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);
  private readonly notificationService = inject(NotificationService);
  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);
  profile: UserProfile | null = null;
  loading = true;
  editMode = false;
  saving = false;
  error = '';
  profilePictureFile: File | null = null;
  profileForm!: FormGroup;

  readonly defaultAvatar = 'assets/images/user/user.png';

  ngOnInit(): void {
    this.initForm();
    this.loadProfile();
  }

  private initForm(): void {
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sexe: ['M'],
      numtel: this.fb.array([this.fb.control('')]),
      dtnaissance: [''],
      nomEndroit: [''],
      latitude: [null as number | null],
      longitude: [null as number | null]
    });
  }

  get numtelArray(): FormArray {
    return this.profileForm.get('numtel') as FormArray;
  }

  addPhone(): void {
    this.numtelArray.push(this.fb.control(''));
  }

  removePhone(index: number): void {
    if (this.numtelArray.length > 1) {
      this.numtelArray.removeAt(index);
    }
  }

  loadProfile(): void {
    this.loading = true;
    this.error = '';
    
    // Timeout de 3 secondes
    const timeout = setTimeout(() => {
      this.loading = false;
      this.error = 'Le chargement prend trop de temps. Veuillez réessayer.';
    }, 1000);

    this.userService.getProfile().subscribe({
      next: (res) => {
        clearTimeout(timeout);
        if (res.success && res.data) {
          this.profile = res.data;
          this.patchFormFromProfile(res.data);
        }
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        clearTimeout(timeout);
        this.error = err.response?.data?.message || err.message || 'Impossible de charger le profil';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private patchFormFromProfile(p: UserProfile): void {
    const numtel = (p.numtel && p.numtel.length) ? p.numtel : [''];
    this.profileForm.patchValue({
      nom: p.nom ?? '',
      email: p.email ?? '',
      sexe: p.sexe ?? 'M',
      dtnaissance: p.dtnaissance
        ? (typeof p.dtnaissance === 'string'
            ? p.dtnaissance.split('T')[0]
            : new Date(p.dtnaissance as any).toISOString().split('T')[0])
        : '',
      nomEndroit: p.adresse?.nomEndroit ?? '',
      latitude: p.adresse?.latitude ?? null,
      longitude: p.adresse?.longitude ?? null
    });
    this.profileForm.setControl('numtel', this.fb.array(numtel.map(t => this.fb.control(t))));
  }

  get roleLabel(): string {
    if (!this.profile?.role) return 'User';
    const r = typeof this.profile.role === 'string' ? this.profile.role : (this.profile.role as { nom: string }).nom;
    const map: Record<string, string> = {
      user: 'Client',
      admin_boutique: 'Shop Owner',
      admin_center: 'Royal Center Admin',
      admin_centre: 'Royal Center Owner',
      super_admin: 'Project Admin'
    };
    return map[r] ?? r;
  }

  get profileImageUrl(): string {
    if (this.profilePictureFile) {
      return URL.createObjectURL(this.profilePictureFile);
    }
    if (this.profile?.pdppath) {
      return this.profile.pdppath;
    }
    return this.defaultAvatar;
  }

  startEdit(): void {
    this.editMode = true;
    this.profilePictureFile = null;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.profilePictureFile = null;
    if (this.profile) {
      this.patchFormFromProfile(this.profile);
    }
  }

  onProfilePictureChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.profilePictureFile = input.files[0];
    }
  }

  saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const v = this.profileForm.value;
    const numtel = (v.numtel as string[]).filter(t => t && String(t).trim() !== '');
    if (numtel.length === 0) {
      this.notificationService.error('Erreur', 'Au moins un numéro de téléphone est requis.');
      return;
    }

    this.saving = true;
    this.error = '';

    const payload: UpdateProfilePayload = {
      nom: v.nom,
      email: v.email,
      sexe: v.sexe,
      numtel,
      dtnaissance: v.dtnaissance || undefined,
      adresse: (v.nomEndroit || v.latitude != null || v.longitude != null)
        ? {
            nomEndroit: v.nomEndroit || undefined,
            latitude: v.latitude != null && v.latitude !== '' ? Number(v.latitude) : undefined,
            longitude: v.longitude != null && v.longitude !== '' ? Number(v.longitude) : undefined
          }
        : undefined
    };

    if (this.profilePictureFile) {
      const formData = new FormData();
      formData.append('nom', payload.nom!);
      formData.append('email', payload.email!);
      formData.append('sexe', payload.sexe ?? 'M');
      formData.append('numtel', JSON.stringify(payload.numtel));
      if (payload.dtnaissance) formData.append('dtnaissance', payload.dtnaissance);
      if (payload.adresse) formData.append('adresse', JSON.stringify(payload.adresse));
      formData.append('profilePicture', this.profilePictureFile);

      this.userService.updateProfileWithPicture(formData).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.profile = res.data;
            this.authService.updateStoredUser?.({
              ...res.data,
              sexe: (res.data.sexe === 'M' || res.data.sexe === 'F') ? res.data.sexe : 'M'
            });
            this.editMode = false;
            this.profilePictureFile = null;
            this.notificationService.success('Profil', 'Profil et photo mis à jour.');
          }
          this.saving = false;
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        },
        error: (err) => {
          this.error = err.response?.data?.message || err.message || 'Erreur lors de la mise à jour';
          this.saving = false;
          this.cdr.detectChanges();
          
        }
      });
    } else {
      this.userService.updateProfile(payload).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.profile = res.data;
            this.authService.updateStoredUser?.({
              ...res.data,
              sexe: (res.data.sexe === 'M' || res.data.sexe === 'F') ? res.data.sexe : 'M'
            });
            this.editMode = false;
            this.notificationService.success('Profil', 'Profil mis à jour.');
          }
          this.saving = false;
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        },
        error: (err) => {
          this.error = err.response?.data?.message || err.message || 'Erreur lors de la mise à jour';
          this.saving = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
}
