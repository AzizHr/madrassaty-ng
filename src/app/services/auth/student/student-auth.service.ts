import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {StudentRegisterRequest} from "../../../models/request/student-register-request";
import {StudentResponse} from "../../../models/response/student-response";

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  private STUDENT_AUTH_API: string = 'http://localhost:8080/api/auth/student';
  private STUDENT_PROFILE: string = 'http://localhost:8080/api/student';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private jwtStorageService: JwtStorageService) {}

  public isLoggedIn(): boolean {
    return !!(this.jwtStorageService.getToken() && this.jwtStorageService.getUser());
  }

  public authenticate(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.STUDENT_AUTH_API}/login`, loginRequest, this.httpOptions
    )
  }

  public register(studentRegisterRequest: StudentRegisterRequest): Observable<AuthResponse> {
    const formData = new FormData();
    formData.append('firstname', studentRegisterRequest.firstname);
    formData.append('lastname', studentRegisterRequest.lastname);
    formData.append('email', studentRegisterRequest.email);
    formData.append('password', studentRegisterRequest.password);
    if (studentRegisterRequest.image instanceof File) {
      formData.append('image', studentRegisterRequest.image, studentRegisterRequest.image.name);
    }
    formData.append('city', studentRegisterRequest.city);
    formData.append('address', studentRegisterRequest.address);
    formData.append('classId', String(studentRegisterRequest.classId));
    formData.append('specialtyId', String(studentRegisterRequest.specialtyId));
    return this.http.post<AuthResponse>(
      `${this.STUDENT_AUTH_API}/register`, formData
    )
  }

  public logout(): void {
    localStorage.removeItem('user');
    window.location.reload();
    this.router.navigateByUrl('/student/login');
  }

  public getLoggedInStudent(): Observable<StudentResponse> {
    return this.http.get<StudentResponse>(this.STUDENT_PROFILE)
  }

}
