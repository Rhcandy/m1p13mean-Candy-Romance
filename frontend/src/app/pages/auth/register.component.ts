import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: 'user', // 'user' ou 'adminboutique'
    profileImage: null as File | null
  };

  profileImagePreview: string | null = null;

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    
    console.log('Inscription:', this.user);
    // TODO: Appeler le service d'authentification
  }

  selectRole(role: string) {
    this.user.role = role;
  }

  onProfileImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Valider le type de fichier
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image valide');
        return;
      }

      // Valider la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('L\'image ne doit pas dépasser 5MB');
        return;
      }

      this.user.profileImage = file;

      // Créer un aperçu
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeProfileImage() {
    this.user.profileImage = null;
    this.profileImagePreview = null;
  }
}
