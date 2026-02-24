import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


export interface UserProfile {
  _id: string;
  id?: string;
  nom: string;
  email: string;
  role: string | { nom: string };
  pdppath?: string | null;
  sexe?: string | null;
  numtel?: string[] | null;
  dtnaissance?: string | null;
  adresse?: {
    nomEndroit?: string | null;
    latitude?: number | null;
    longitude?: number | null;
  } | null;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface UpdateProfilePayload {
  nom?: string;
  email?: string;
  sexe?: string;
  numtel?: string[];
  dtnaissance?: string;
  adresse?: {
    nomEndroit?: string;
    latitude?: number;
    longitude?: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
   constructor(private readonly api: ApiService) { }
  getProfile(): Observable<ApiResponse<UserProfile>> {
    return this.api.get<ApiResponse<UserProfile>>('/users/profile');
  }

  getUserById(id: string): Observable<ApiResponse<UserProfile>> {
    return this.api.get<ApiResponse<UserProfile>>(`/users/${id}`);
  }

  updateProfile(payload: UpdateProfilePayload): Observable<ApiResponse<UserProfile>> {
    return this.api.put<ApiResponse<UserProfile>>('/users/profile', payload);
  }

  updateProfileWithPicture(formData: FormData): Observable<ApiResponse<UserProfile>> {
    return this.api.putFile<ApiResponse<UserProfile>>('/users/profile/with-profile', formData);
  }

  updateProfilePicture(file: File): Observable<ApiResponse<UserProfile>> {
    const formData = new FormData();
    formData.append('photo', file);
    return this.api.putFile<ApiResponse<UserProfile>>('/users/profile-picture', formData);
  }
}
