import { Component } from '@angular/core';
import {UserResponse} from "../../../../models/response/user-response";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ManagerAuthService} from "../../../../services/auth/manager/manager-auth.service";
import {JwtStorageService} from "../../../../services/jwt/jwt-storage.service";
import {LoginRequest} from "../../../../models/request/login-request";
import Swal from "sweetalert2";
import {RoleCheckerService} from "../../../../services/auth/role-checker/role-checker.service";

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {

  user: UserResponse;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSubmitted = false;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private managerAuthService: ManagerAuthService,
              private jwtStorageService: JwtStorageService,
              private roleCheckerService: RoleCheckerService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.roleCheckerService.isLoggedIn();
  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.loginForm.get(field)?.hasError(errorType) &&
      (this.loginForm.get(field)?.dirty ||
        this.loginForm.get(field)?.touched || this.isSubmitted);
  }

  onSubmit() {
    const loginRequest: LoginRequest  = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.managerAuthService.authenticate(loginRequest).subscribe(
      (data) => {
        console.log(data);
        this.jwtStorageService.saveUser(data);
        this.user = this.jwtStorageService.getUser();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        setTimeout(() => {
        }, 1500);
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.errorMessage
        });
        this.isLoginFailed = true;
        this.router.navigateByUrl("/manager/login")
      }
    )
    this.isSubmitted = true;
  }

}
