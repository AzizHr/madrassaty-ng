import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthResponse} from "../../../../models/auth-response";
import {AuthRequest} from "../../../../models/auth-request";
import {ManagerAuthService} from "../../../../services/auth/manager/manager-auth.service";
import {JwtStorageService} from "../../../../services/jwt/jwt-storage.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  manager: AuthResponse;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSubmitted: boolean;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private managerAuthService: ManagerAuthService,
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

    this.managerAuthService.authenticate(authRequest).subscribe(
      (data) => {
        this.jwtStorageService.saveToken(data.token);
        this.jwtStorageService.saveUser(data);
        this.manager = this.jwtStorageService.getUser();
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
