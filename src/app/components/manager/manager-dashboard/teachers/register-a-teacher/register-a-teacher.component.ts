import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../../state/app.state";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import Swal from "sweetalert2";
import {SubjectResponse} from "../../../../../models/response/subject-response";
import {subjectsSelector} from "../../../../../store/selectors/subject.selectors";
import {loadSubjectsBySchoolIdWithNoPagination} from "../../../../../store/actions/subject.actions";
import {TeacherRegisterRequest} from "../../../../../models/request/teacher-register-request";
import {TeacherAuthService} from "../../../../../services/auth/teacher/teacher-auth.service";
import {Page} from "../../../../../models/page/page";

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
  subjectPage$: Observable<Page<SubjectResponse>>;
  subjects: SubjectResponse[] = [];
  teacherRegisterRequest: TeacherRegisterRequest;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router, private teacherAuthService: TeacherAuthService) {
    this.subjectPage$ = this.store.pipe(select(subjectsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadSubjectsBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.subjectPage$.subscribe((data) => {
      this.subjects = data.content;
      console.log(data.content)
    })
  }

  teacherRegisterForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    image: [],
    subjectId: [null, [Validators.required]],
  });

  uploadFile(event: any) {
    this.teacherRegisterForm.value.image = event.target.files[0];
    console.log(this.teacherRegisterForm.value.image);
    console.log(typeof this.teacherRegisterForm.value.image);
  }

  onSubmit() {
    this.teacherRegisterRequest = {
      firstname: this.teacherRegisterForm.value.firstname,
      lastname: this.teacherRegisterForm.value.lastname,
      email: this.teacherRegisterForm.value.email,
      password: this.teacherRegisterForm.value.password,
      city: this.teacherRegisterForm.value.city,
      address: this.teacherRegisterForm.value.address,
      image: this.teacherRegisterForm.value.image,
      subjectId: this.teacherRegisterForm.value.subjectId,
    }


    this.teacherAuthService.register(this.teacherRegisterRequest).subscribe(
      (data) => {
        this.isRegistered = true;
        this.isRegisterFailed = false;
        console.log(data)
        setTimeout(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Teacher account created with success",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("manager/dashboard/teachers")
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
    console.log(this.teacherRegisterForm.value)

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.teacherRegisterForm.get(field)?.hasError(errorType) &&
      (this.teacherRegisterForm.get(field)?.dirty ||
        this.teacherRegisterForm.get(field)?.touched || this.isSubmitted);
  }

}
