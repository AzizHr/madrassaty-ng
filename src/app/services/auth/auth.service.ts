import {Injectable} from '@angular/core';
import {Role} from "../../enums/role";
import {JwtStorageService} from "../jwt/jwt-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtStorageService: JwtStorageService) {}

  isLoggedIn(): boolean {
    return !!this.jwtStorageService.getToken();
  }

  isManager(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.MANAGER;
  }

  isStudent(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.STUDENT;
  }

  isTeacher(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.TEACHER;
  }

}
