import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {ManagerRegisterRequest} from "../../../models/request/manager-register-request";

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthService {

  private MANAGER_AUTH_API: string = 'http://localhost:8080/api/manager';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {}

  public authenticate(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/login`, loginRequest, this.httpOptions
    )
  }

  public register(managerRegisterRequest: ManagerRegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/register`, managerRegisterRequest, this.httpOptions
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    window.location.reload();
    this.router.navigateByUrl('/manager/login');
  }

}
