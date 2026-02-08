import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api.service';

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

  getProfile(): Observable<ApiResponse<UserProfile>> {
    return from(api.get<ApiResponse<UserProfile>>('/users/profile')).pipe(
      map(r => r.data)
    );
  }

  getUserById(id: string): Observable<ApiResponse<UserProfile>> {
    return from(api.get<ApiResponse<UserProfile>>(`/users/${id}`)).pipe(
      map(r => r.data)
    );
  }

  updateProfile(payload: UpdateProfilePayload): Observable<ApiResponse<UserProfile>> {
    return from(api.put<ApiResponse<UserProfile>>('/users/profile', payload)).pipe(
      map(r => r.data)
    );
  }

  updateProfileWithPicture(formData: FormData): Observable<ApiResponse<UserProfile>> {
    return from(
      api.put<ApiResponse<UserProfile>>('/users/profile/with-profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    ).pipe(map(r => r.data));
  }

  updateProfilePicture(file: File): Observable<ApiResponse<UserProfile>> {
    const formData = new FormData();
    formData.append('profilePicture', file);
    return from(
      api.put<ApiResponse<UserProfile>>('/users/profile-picture', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    ).pipe(map(r => r.data));
  }
}
