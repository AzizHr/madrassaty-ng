import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import Swal from "sweetalert2";
import {SubjectResponse} from "../../../../models/response/subject-response";
import {subjectsSelector} from "../../../../store/selectors/subject.selectors";
import {loadSubjectsBySchoolIdWithNoPagination} from "../../../../store/actions/subject.actions";
import {TeacherRegisterRequest} from "../../../../models/request/teacher-register-request";
import {TeacherAuthService} from "../../../../services/auth/teacher/teacher-auth.service";

@Component({
  selector: 'app-register-a-teacher',
  templateUrl: './register-a-teacher.component.html',
  styleUrls: ['./register-a-teacher.component.css']
})
export class RegisterATeacherComponent {

  isRegistered = false;
  isRegisterFailed = false;
  errorMessage = '';
  isSubmitted = false;
  subjects$: Observable<any>;
  subjects: SubjectResponse[] = [];
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router, private teacherAuthService: TeacherAuthService) {
    this.subjects$ = this.store.pipe(select(subjectsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadSubjectsBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.subjects$.subscribe((data) => {
      this.subjects = data.content;
      console.log(data.content)
    })
  }

  teacherRegisterForm = this.formBuilder.group({
    firstname: [null, [Validators.required]],
    lastname: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
    city: [null, [Validators.required]],
    address: [null, [Validators.required]],
    image: [null, [Validators.required]],
    subjectId: [null, [Validators.required]],
  });

  onSubmit() {
    const teacherRegisterRequest: TeacherRegisterRequest = {
      firstname: this.teacherRegisterForm.value.firstname,
      lastname: this.teacherRegisterForm.value.lastname,
      email: this.teacherRegisterForm.value.email,
      password: this.teacherRegisterForm.value.password,
      city: this.teacherRegisterForm.value.city,
      address: this.teacherRegisterForm.value.address,
      image: this.teacherRegisterForm.value.image,
      subjectId: this.teacherRegisterForm.value.subjectId,
    }


    this.teacherAuthService.register(teacherRegisterRequest).subscribe(
        (data) => {
          this.isRegistered = true;
          this.isRegisterFailed = false;
          setTimeout(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Teacher account created with success",
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigateByUrl("/teacher/login")
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
    return this.teacherRegisterForm.get(field)?.hasError(errorType) &&
        (this.teacherRegisterForm.get(field)?.dirty ||
            this.teacherRegisterForm.get(field)?.touched || this.isSubmitted);
  }

}
