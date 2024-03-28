import { Component } from '@angular/core';
import {DurationType} from "../../../../../enums/duration-type.enums";
import {Observable} from "rxjs";
import {ClassResponse} from "../../../../../models/response/class-response";
import {ProfileResponse} from "../../../../../models/response/profile-response";
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../../state/app.state";
import {Router} from "@angular/router";
import {AbsenceService} from "../../../../../services/absence/absence.service";
import {classesSelector} from "../../../../../store/selectors/class.selectors";
import {studentsSelector} from "../../../../../store/selectors/student.selectors";
import {loadClassesByTeacherIdWithNoPagination} from "../../../../../store/actions/class.actions";
import {loadStudentsByClassIdWithNoPagination} from "../../../../../store/actions/student.actions";
import {AbsenceRequest} from "../../../../../models/request/absence-request";
import Swal from "sweetalert2";

@Component({
  selector: 'app-my-classroom-details',
  templateUrl: './my-classroom-details.component.html',
  styleUrls: ['./my-classroom-details.component.css']
})
export class MyClassroomDetailsComponent {

  durationTypes = Object.keys(DurationType)
  errorMessage: string;
  isSubmitted: boolean = false;
  classes$: Observable<any>;
  classes: ClassResponse[] = [];
  classStudents$: Observable<any>;
  classStudents: ProfileResponse[] = [];
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router, private absentService: AbsenceService) {
    this.classes$ = this.store.pipe(select(classesSelector))
    this.classStudents$ = this.store.pipe(select(studentsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadClassesByTeacherIdWithNoPagination({ teacherId: 1 }));
    this.classes$.subscribe((data) => {
      this.classes = data.content;
      console.log(data.content)
    })
  }

  onChange(classId: any): void {
    this.store.dispatch(loadStudentsByClassIdWithNoPagination({ classId: classId}));
    this.classStudents$.subscribe((data) => {
      this.classStudents = data.content;
      console.log(data.content)
    })
  }

  absentForm = this.formBuilder.group({
    duration: [1, [Validators.required]],
    durationType: [null, [Validators.required]],
    reason: ['', [Validators.required]],
    isJustified: [false],
    studentId: [null, [Validators.required]]
  });

  onSubmit() {
    const absentRequest: AbsenceRequest = {
      duration: this.absentForm.value.duration,
      durationType: this.absentForm.value.durationType,
      reason: this.absentForm.value.reason,
      isJustified: this.absentForm.value.isJustified,
      studentId: this.absentForm.value.studentId
    }

    this.absentService.noteAbsentForAStudent(absentRequest).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Noted as absent with success",
          icon: "success"
        });
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.errorMessage
        });
      }
    )

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.absentForm.get(field)?.hasError(errorType) &&
      (this.absentForm.get(field)?.dirty ||
        this.absentForm.get(field)?.touched || this.isSubmitted);
  }

}
