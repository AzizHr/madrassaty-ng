import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {ManagerAuthService} from "../../services/auth/manager/manager-auth.service";
import {StudentAuthService} from "../../services/auth/student/student-auth.service";
import {TeacherAuthService} from "../../services/auth/teacher/teacher-auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn: boolean;

  constructor(private authService: AuthService,
              private managerAuthService: ManagerAuthService,
              private studentAuthService: StudentAuthService,
              private teacherAuthService: TeacherAuthService
  ) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  logout(): void {
    if(this.authService.isManager()) {
      this.managerAuthService.logout()
    } else if(this.authService.isStudent()) {
      this.studentAuthService.logout();
    } else if(this.authService.isTeacher()) {
      this.teacherAuthService.logout()
    }
  }

}
