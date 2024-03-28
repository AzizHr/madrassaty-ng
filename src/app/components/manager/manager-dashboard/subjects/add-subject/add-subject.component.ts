import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../state/app.state";
import {Router} from "@angular/router";
import {SubjectRequest} from "../../../../../models/request/subject-request";
import * as SubjectActions from '../../../../../store/actions/subject.actions';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

  subjectForm = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  onSubmit() {
    const subjectRequest: SubjectRequest = {
      name: this.subjectForm.value.name,
      schoolId: 1
    }

    this.store.dispatch(SubjectActions.addSubject({ subjectRequest: subjectRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.subjectForm.get(field)?.hasError(errorType) &&
      (this.subjectForm.get(field)?.dirty ||
        this.subjectForm.get(field)?.touched || this.isSubmitted);
  }

}
