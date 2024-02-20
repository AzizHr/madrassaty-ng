import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../../../models/auth-request";
import {Observable} from "rxjs";
import {AuthResponse} from "../../../models/auth-response";
import {TeacherRegisterRequest} from "../../../models/teacher-register-request";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthService {

  private TEACHER_AUTH_API: string = 'http://localhost:8080/api/auth/teacher';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {}

  public authenticate(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.TEACHER_AUTH_API}/login`, authRequest, this.httpOptions
    )
  }

  public register(teacherRegisterRequest: TeacherRegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.TEACHER_AUTH_API}/register`, teacherRegisterRequest, this.httpOptions
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigateByUrl('teacher/login');
  }

}
