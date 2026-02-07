import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import api from './api.service';

export interface User {
  id: string;
  nom?: string;
  email: string;
  role: 'user' | 'admin_boutique' | 'admin_center' | 'super_admin';
  pdppath?: string;
  numtel?: string[];
  dtnaissance?: string;
  sexe?: 'M' | 'F';
  adresse?: {
    nomEndroit?: string;
    latitude?: number;
    longitude?: number;
  };
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface RegisterData {
  email: string;
  password: string;
  role: 'user' | 'admin_boutique';
  nom?: string;
  sexe?: 'M' | 'F';
  numtel?: string[];
  dtnaissance?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private router: Router
  ) {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    const token = this.getToken();
    const user = this.getUser();
    
    if (token && user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    } else {
      this.logout();
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return from(
      api.post<LoginResponse>('/auth/login', { email, password })
    ).pipe(
      map(response => response.data),
      tap(response => {
        if (response.success && response.data) {
          this.setToken(response.data.token);
          this.setUser(response.data.user);
          this.currentUserSubject.next(response.data.user);
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  register(data: RegisterData): Observable<LoginResponse> {
    const registerPayload = {
      nom: data.nom,
      email: data.email,
      password: data.password,
      roleName: data.role,
      sexe: data.sexe,
      numtel: data.numtel,
      dtnaissance: data.dtnaissance
    };

    
    return from(
      api.post<LoginResponse>('/auth/register', registerPayload)
    ).pipe(
      map(response => response.data),
      tap(response => {
        if (response.success && response.data) {
          this.setToken(response.data.token);
          this.setUser(response.data.user);
          this.currentUserSubject.next(response.data.user);
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  private setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  hasRole(role: 'user' | 'admin_boutique'): boolean {
    return this.currentUser?.role === role;
  }
}
