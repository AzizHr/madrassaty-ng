import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthResponse} from "../../../../models/auth-response";
import {AuthRequest} from "../../../../models/auth-request";
import {StudentAuthService} from "../../../../services/auth/student/student-auth.service";
import {JwtStorageService} from "../../../../services/jwt/jwt-storage.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  teacher: AuthResponse;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSubmitted: boolean;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private teacherAuthService: StudentAuthService,
              private jwtStorageService: JwtStorageService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.loginForm.get(field)?.hasError(errorType) &&
      (this.loginForm.get(field)?.dirty ||
        this.loginForm.get(field)?.touched || this.isSubmitted);
  }

  onSubmit() {
    const authRequest: AuthRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.teacherAuthService.authenticate(authRequest).subscribe(
      (data) => {
        this.jwtStorageService.saveToken(data.token);
        this.jwtStorageService.saveUser(data);
        this.teacher = this.jwtStorageService.getUser();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
