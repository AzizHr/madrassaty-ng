import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import * as SubjectActions from "../../../../store/actions/subject.actions";
import {SpecialtySubjectRequest} from "../../../../models/request/specialty-subject-request";
import {Observable} from "rxjs";
import {SpecialtyResponse} from "../../../../models/response/specialty-response";
import {SubjectResponse} from "../../../../models/response/subject-response";
import {specialtiesSelector} from "../../../../store/selectors/specialty.selectors";
import {subjectsSelector} from "../../../../store/selectors/subject.selectors";
import {loadSubjectsBySchoolIdWithNoPagination} from "../../../../store/actions/subject.actions";
import {loadSpecialtiesBySchoolIdWithNoPagination} from "../../../../store/actions/specialty.actions";

@Component({
  selector: 'app-assign-a-subject-to-a-specialty',
  templateUrl: './assign-a-subject-to-a-specialty.component.html',
  styleUrls: ['./assign-a-subject-to-a-specialty.component.css']
})
export class AssignASubjectToASpecialtyComponent implements OnInit {

  isSubmitted: boolean = false;
  specialties$: Observable<any>;
  specialties: SpecialtyResponse[] = [];
  subjects_$: Observable<any>;
  subjects_: SubjectResponse[] = [];
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.specialties$ = this.store.pipe(select(specialtiesSelector))
    this.subjects_$ = this.store.pipe(select(subjectsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadSpecialtiesBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.specialties$.subscribe((data) => {
      this.specialties = data.content;
      console.log(data.content)
    })

    this.store.dispatch(loadSubjectsBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.subjects_$.subscribe((data) => {
      this.subjects_ = data.content;
      console.log(this.subjects_)
    })
  }

  specialtySubjectForm = this.formBuilder.group({
    specialtyId: [null, [Validators.required]],
    subjectId: [null, [Validators.required]]
  });

  onSubmit() {
    const specialtySubjectRequest: SpecialtySubjectRequest = {
      specialtyId: this.specialtySubjectForm.value.specialtyId,
      subjectId: this.specialtySubjectForm.value.subjectId
    }

    this.store.dispatch(SubjectActions.assignASubjectToASpecialty({ specialtySubjectRequest: specialtySubjectRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.specialtySubjectForm.get(field)?.hasError(errorType) &&
      (this.specialtySubjectForm.get(field)?.dirty ||
        this.specialtySubjectForm.get(field)?.touched || this.isSubmitted);
  }

}
