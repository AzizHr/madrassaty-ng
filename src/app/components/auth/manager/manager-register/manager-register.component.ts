import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ManagerAuthService} from "../../../../services/auth/manager/manager-auth.service";
import {JwtStorageService} from "../../../../services/jwt/jwt-storage.service";
import {Router} from "@angular/router";
import {ManagerRegisterRequest} from "../../../../models/request/manager-register-request";
import Swal from "sweetalert2";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {SchoolResponse} from "../../../../models/response/school-response";
import {schoolSelector} from "../../../../store/selectors/school.selectors";
import {an} from "@fullcalendar/core/internal-common";

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
  managerRegisterRequest: ManagerRegisterRequest;
  createdSchool: SchoolResponse;
  schoolId: any;

  constructor(private formBuilder: FormBuilder, private jwtStorageService: JwtStorageService, private store: Store<AppState>, private router: Router, private managerAuthService: ManagerAuthService) {
    this.store.pipe(select(schoolSelector)).subscribe(school => {
      this.createdSchool = school});
  }

  ngOnInit(): void {
    console.log(this.createdSchool)
    this.schoolId = localStorage.getItem('schoolId')
  }

  managerRegisterForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    image: []
  });

  uploadFile(event: any) {
    this.managerRegisterForm.value.image = event.target.files[0];
    console.log(this.managerRegisterForm.value.image);
    console.log(typeof this.managerRegisterForm.value.image);
  }

  onSubmit() {
    this.managerRegisterRequest = {
      firstname: this.managerRegisterForm.value.firstname,
      lastname: this.managerRegisterForm.value.lastname,
      email: this.managerRegisterForm.value.email,
      password: this.managerRegisterForm.value.password,
      city: this.managerRegisterForm.value.city,
      address: this.managerRegisterForm.value.address,
      image: this.managerRegisterForm.value.image,
      schoolId: this.schoolId
    }


    this.managerAuthService.register(this.managerRegisterRequest).subscribe(
      (data) => {
        this.isRegistered = true;
        this.isRegisterFailed = false;
        console.log(data)
        setTimeout(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("manager/login")
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
    console.log(this.managerRegisterForm.value)

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.managerRegisterForm.get(field)?.hasError(errorType) &&
      (this.managerRegisterForm.get(field)?.dirty ||
        this.managerRegisterForm.get(field)?.touched || this.isSubmitted);
  }

}
