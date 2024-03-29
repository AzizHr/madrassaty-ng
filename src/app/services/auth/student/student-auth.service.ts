import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {StudentRegisterRequest} from "../../../models/request/student-register-request";
import {StudentProfileResponse} from "../../../models/response/student-profile-response";

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  private STUDENT_AUTH_API: string = 'http://localhost:8080/api/auth/student';
  private STUDENT_PROFILE: string = 'http://localhost:8080/api/student';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {}

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
    localStorage.removeItem('accessToken');
    window.location.reload();
    this.router.navigateByUrl('/student/login');
  }

  public getLoggedInStudent(): Observable<StudentProfileResponse> {
    return this.http.get<StudentProfileResponse>(this.STUDENT_PROFILE)
  }

}
