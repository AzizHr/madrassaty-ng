import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {ManagerRegisterRequest} from "../../../models/request/manager-register-request";
import {TeacherRegisterRequest} from "../../../models/request/teacher-register-request";

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthService {

  private MANAGER_AUTH_API: string = 'http://localhost:8080/api/teacher';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private jwtStorageService: JwtStorageService) {}

  public isLoggedIn(): boolean {
    return !!(this.jwtStorageService.getToken() && this.jwtStorageService.getUser());
  }

  public authenticate(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/login`, loginRequest, this.httpOptions
    )
  }

  public register(teacherRegisterRequest: TeacherRegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/register`, teacherRegisterRequest, this.httpOptions
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    window.location.reload();
    this.router.navigateByUrl('/teacher/login');
  }

}
