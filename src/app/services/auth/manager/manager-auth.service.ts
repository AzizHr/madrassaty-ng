import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {ManagerRegisterRequest} from "../../../models/request/manager-register-request";
import {ManagerResponse} from "../../../models/response/manager-response";

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthService {

  private MANAGER_AUTH_API: string = 'http://localhost:8080/api/auth/manager';
  private MANAGER_PROFILE: string = 'http://localhost:8080/api/manager';

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
    const formData = new FormData();
    formData.append('firstname', managerRegisterRequest.firstname);
    formData.append('lastname', managerRegisterRequest.lastname);
    formData.append('email', managerRegisterRequest.email);
    formData.append('password', managerRegisterRequest.password);
    if (managerRegisterRequest.image instanceof File) {
      formData.append('image', managerRegisterRequest.image, managerRegisterRequest.image.name);
    }
    formData.append('city', managerRegisterRequest.city);
    formData.append('address', managerRegisterRequest.address);
    formData.append('schoolId', String(managerRegisterRequest.schoolId));
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/register`, formData
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    window.location.reload();
    this.router.navigateByUrl('/manager/login');
  }

  public getLoggedInManager(): Observable<ManagerResponse> {
    return this.http.get<ManagerResponse>(this.MANAGER_PROFILE)
  }
}
