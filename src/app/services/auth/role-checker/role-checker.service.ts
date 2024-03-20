import {Injectable} from '@angular/core';
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {Role} from "../../../enums/role.enums";

@Injectable({
  providedIn: 'root'
})
export class RoleCheckerService {

  constructor(private jwtStorageService: JwtStorageService) {}

  public isLoggedIn(): boolean {
    return !!(this.jwtStorageService.getToken() && this.jwtStorageService.getUser());
  }

  isManager(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.MANAGER;
  }

  isTeacher(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.TEACHER;
  }

  isStudent(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.STUDENT;
  }

}
