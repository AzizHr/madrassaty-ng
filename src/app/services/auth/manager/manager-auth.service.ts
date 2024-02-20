import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../../../models/auth-request";
import {AuthResponse} from "../../../models/auth-response";
import {Observable} from "rxjs";
import {ManagerRegisterRequest} from "../../../models/manager-register-request";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthService {

  private MANAGER_AUTH_API: string = 'http://localhost:8080/api/auth/manager';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  public authenticate(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/login`, authRequest, this.httpOptions
    )
  }

  public register(managerRegisterRequest: ManagerRegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/register`, managerRegisterRequest, this.httpOptions
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigateByUrl('/manager/login');
  }

}
