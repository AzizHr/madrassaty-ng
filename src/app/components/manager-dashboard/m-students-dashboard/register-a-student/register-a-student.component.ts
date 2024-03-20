import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SpecialtyResponse} from "../../../../models/response/specialty-response";
import {ClassResponse} from "../../../../models/response/class-response";
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {specialtiesSelector} from "../../../../store/selectors/specialty.selectors";
import {loadSpecialtiesBySchoolIdWithNoPagination} from "../../../../store/actions/specialty.actions";
import {loadClassesBySchoolIdWithNoPagination} from "../../../../store/actions/class.actions";
import {StudentRegisterRequest} from "../../../../models/request/student-register-request";
import Swal from "sweetalert2";
import {classesSelector} from "../../../../store/selectors/class.selectors";
import {StudentAuthService} from "../../../../services/auth/student/student-auth.service";

@Component({
  selector: 'app-register-a-student',
  templateUrl: './register-a-student.component.html',
  styleUrls: ['./register-a-student.component.css']
})
export class RegisterAStudentComponent implements OnInit {

  isRegistered = false;
  isRegisterFailed = false;
  errorMessage = '';
  isSubmitted = false;
  specialties$: Observable<any>;
  specialties: SpecialtyResponse[] = [];
  classes$: Observable<any>;
  classes: ClassResponse[] = [];
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router, private studentAuthService: StudentAuthService) {
    this.specialties$ = this.store.pipe(select(specialtiesSelector))
    this.classes$ = this.store.pipe(select(classesSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadSpecialtiesBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.specialties$.subscribe((data) => {
      this.specialties = data.content;
      console.log(data.content)
    })

    this.store.dispatch(loadClassesBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.classes$.subscribe((data) => {
      this.classes = data.content;
      console.log(data.content)
    })
  }

  studentRegisterForm = this.formBuilder.group({
    firstname: [null, [Validators.required]],
    lastname: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
    city: [null, [Validators.required]],
    address: [null, [Validators.required]],
    image: [null, [Validators.required]],
    specialtyId: [null, [Validators.required]],
    classId: [null, [Validators.required]],
  });

  onSubmit() {
    const studentRegisterRequest: StudentRegisterRequest = {
      firstname: this.studentRegisterForm.value.firstname,
      lastname: this.studentRegisterForm.value.lastname,
      email: this.studentRegisterForm.value.email,
      password: this.studentRegisterForm.value.password,
      city: this.studentRegisterForm.value.city,
      address: this.studentRegisterForm.value.address,
      image: this.studentRegisterForm.value.image,
      specialtyId: this.studentRegisterForm.value.specialtyId,
      classId: this.studentRegisterForm.value.classId,
    }


    this.studentAuthService.register(studentRegisterRequest).subscribe(
        (data) => {
          this.isRegistered = true;
          this.isRegisterFailed = false;
          setTimeout(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Student account created with success",
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigateByUrl("/student/login")
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

  isFieldValid(field: string, errorType: string): boolean {
    return this.studentRegisterForm.get(field)?.hasError(errorType) &&
        (this.studentRegisterForm.get(field)?.dirty ||
            this.studentRegisterForm.get(field)?.touched || this.isSubmitted);
  }
}
