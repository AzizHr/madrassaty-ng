import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {ManagerRegisterRequest} from "../../../models/request/manager-register-request";
import {StudentRegisterRequest} from "../../../models/request/student-register-request";

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  private MANAGER_AUTH_API: string = 'http://localhost:8080/api/auth/student';
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
      `${this.MANAGER_AUTH_API}/register`, formData
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    window.location.reload();
    this.router.navigateByUrl('/student/login');
  }

}
