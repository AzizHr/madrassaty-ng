import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ManagerAuthService} from "../../../../services/auth/manager/manager-auth.service";
import {JwtStorageService} from "../../../../services/jwt/jwt-storage.service";
import {Router} from "@angular/router";
import {ManagerRegisterRequest} from "../../../../models/request/manager-register-request";
import Swal from "sweetalert2";

@Component({
  selector: 'app-manager-register',
  templateUrl: './manager-register.component.html',
  styleUrls: ['./manager-register.component.css']
})
export class ManagerRegisterComponent {

  isRegistered = false;
  isRegisterFailed = false;
  errorMessage = '';
  isSubmitted = false;

  registerForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    image: ['', [Validators.required]],
    schoolId: [0, Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private managerAuthService: ManagerAuthService,
              private jwtStorageService: JwtStorageService,
              private router: Router) {}

  ngOnInit(): void {}

  isFieldValid(field: string, errorType: string): boolean {
    return this.registerForm.get(field)?.hasError(errorType) &&
      (this.registerForm.get(field)?.dirty ||
        this.registerForm.get(field)?.touched || this.isSubmitted);
  }

  onSubmit() {
    const managerRegisterRequest: ManagerRegisterRequest  = {
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      image: this.registerForm.value.image,
      schoolId: this.registerForm.value.schoolId
    }

    this.managerAuthService.register(managerRegisterRequest).subscribe(
      (data) => {
        this.isRegistered = true;
        this.isRegisterFailed = false;
        setTimeout(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account created with success",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("/manager/login")
        }, 1500);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.errorMessage,
        });
      }
    )
    this.isSubmitted = true;
  }

}
