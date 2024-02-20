import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../../../models/auth-request";
import {Observable} from "rxjs";
import {AuthResponse} from "../../../models/auth-response";
import {StudentRegisterRequest} from "../../../models/student-register-request";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  private STUDENT_AUTH_API: string = 'http://localhost:8080/api/auth/student';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {}

  public authenticate(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.STUDENT_AUTH_API}/login`, authRequest, this.httpOptions
    )
  }

  public register(studentRegisterRequest: StudentRegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.STUDENT_AUTH_API}/register`, studentRegisterRequest, this.httpOptions
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigateByUrl('student/login');
  }

}
