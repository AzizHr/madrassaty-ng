import { Component } from '@angular/core';
import {RoleCheckerService} from "../../services/auth/role-checker/role-checker.service";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";
import {ProfileResponse} from "../../models/response/profile-response";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: ProfileResponse;
  isLoggedIn = false;
  isManager = false;
  isStudent = false;
  isTeacher = false;

  constructor(private roleCheckerService: RoleCheckerService, private jwtStorageService: JwtStorageService) {
    this.isLoggedIn = roleCheckerService.isLoggedIn();
    this.isManager = roleCheckerService.isManager();
    this.isStudent = roleCheckerService.isStudent();
    this.isTeacher = roleCheckerService.isTeacher()
    this.user = jwtStorageService.getUser()
  }

  logout(): void {
    this.jwtStorageService.removeUser()
    window.location.reload()
  }

}
