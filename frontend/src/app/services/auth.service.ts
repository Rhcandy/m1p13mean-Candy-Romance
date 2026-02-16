import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';


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

  private readonly currentUserSubject = new BehaviorSubject<User | null>(null);
  public readonly currentUser$ = this.currentUserSubject.asObservable();

  private readonly isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public readonly isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private readonly router: Router,
    private readonly api: ApiService
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
    return this.api.post<LoginResponse>('/auth/login', { email, password }).pipe(   
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

    return this.api.post<LoginResponse>('/auth/register', registerPayload).pipe(
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

  /** Met à jour l'utilisateur stocké (après édition du profil). */
  updateStoredUser(backendUser: Partial<Omit<User, 'role'>> & { _id?: string; role?: { nom: string } | string }): void {
    const current = this.getUser();
    if (!current) return;
    const roleName = typeof backendUser.role === 'string'
      ? backendUser.role
      : (backendUser.role as { nom: string })?.nom;
    const updated: User = {
      ...current,
      id: backendUser.id ?? backendUser._id ?? current.id,
      nom: backendUser.nom ?? current.nom,
      email: backendUser.email ?? current.email,
      pdppath: backendUser.pdppath !== undefined ? backendUser.pdppath : current.pdppath,
      numtel: backendUser.numtel ?? current.numtel,
      dtnaissance: backendUser.dtnaissance ?? current.dtnaissance,
      sexe: backendUser.sexe ?? current.sexe,
      adresse: backendUser.adresse ?? current.adresse,
      role: (roleName as User['role']) ?? current.role
    };
    this.setUser(updated);
    this.currentUserSubject.next(updated);
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  /**
   * Créer un utilisateur de test pour les démonstrations
   */
  createTestUser(): User {
    const testUser: User = {
      id: '507f1f77bcf86cd799439011', // ObjectId MongoDB valide
      nom: 'Test User',
      email: 'test@example.com',
      role: 'user'
    };

    this.setUser(testUser);
    this.setToken('test-token-123');
    this.currentUserSubject.next(testUser);
    this.isAuthenticatedSubject.next(true);

    return testUser;
  }

  /**
   * S'assurer qu'un utilisateur est défini (pour les tests)
   */
  ensureUserExists(): User {
    let user = this.getUser();
    if (!user) {
      user = this.createTestUser();
    }
    return user;
  }

  /**
   * Obtenir l'ID de l'utilisateur actuel (compatible MongoDB)
   */
  getUserId(): string {
    const user = this.ensureUserExists();
    return user.id;
  }

  hasRole(role: 'user' | 'admin_boutique' | 'admin_center' | 'super_admin'): boolean {
    return this.currentUser?.role === role;
  }
}
