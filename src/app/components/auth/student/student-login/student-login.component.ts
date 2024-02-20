import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthResponse} from "../../../../models/auth-response";
import {AuthRequest} from "../../../../models/auth-request";
import {StudentAuthService} from "../../../../services/auth/student/student-auth.service";
import {JwtStorageService} from "../../../../services/jwt/jwt-storage.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  student: AuthResponse;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSubmitted: boolean;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private studentAuthService: StudentAuthService,
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

    this.studentAuthService.authenticate(authRequest).subscribe(
      (data) => {
        this.jwtStorageService.saveToken(data.token);
        this.jwtStorageService.saveUser(data);
        this.student = this.jwtStorageService.getUser();
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
