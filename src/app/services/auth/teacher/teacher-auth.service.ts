import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {TeacherRegisterRequest} from "../../../models/request/teacher-register-request";
import {TeacherProfileResponse} from "../../../models/response/teacher-profile-response";

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthService {

  private TEACHER_AUTH_API: string = 'http://localhost:8080/api/auth/teacher';
  private TEACHER_PROFILE: string = 'http://localhost:8080/api/teacher';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private jwtStorageService: JwtStorageService) {}

  public authenticate(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.TEACHER_AUTH_API}/login`, loginRequest, this.httpOptions
    )
  }

  public register(teacherRegisterRequest: TeacherRegisterRequest): Observable<AuthResponse> {
    const formData = new FormData();
    formData.append('firstname', teacherRegisterRequest.firstname);
    formData.append('lastname', teacherRegisterRequest.lastname);
    formData.append('email', teacherRegisterRequest.email);
    formData.append('password', teacherRegisterRequest.password);
    if (teacherRegisterRequest.image instanceof File) {
      formData.append('image', teacherRegisterRequest.image, teacherRegisterRequest.image.name);
    }
    formData.append('city', teacherRegisterRequest.city);
    formData.append('address', teacherRegisterRequest.address);
    formData.append('subjectId', String(teacherRegisterRequest.subjectId));
    return this.http.post<AuthResponse>(
      `${this.TEACHER_AUTH_API}/register`, formData
    )
  }

  public logout(): void {
    this.jwtStorageService.removeAccessToken()
    window.location.reload();
    this.router.navigateByUrl('/teacher/login');
  }

  public getLoggedInTeacher(): Observable<TeacherProfileResponse> {
    return this.http.get<TeacherProfileResponse>(this.TEACHER_PROFILE)
  }

}
