import { Component } from '@angular/core';
import { SchoolType } from 'src/app/enums/school-type.enums';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../state/app.state";
import {Router} from "@angular/router";
import * as SchoolActions from "../../../../../store/actions/school.actions";
import {SchoolRequest} from "../../../../../models/request/school-request";

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent {
  schoolTypes = Object.keys(SchoolType)

  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

  schoolForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    type: [SchoolType.PRESCHOOL, Validators.required]
  });

  onSubmit() {
    const schoolRequest: SchoolRequest = {
      name: this.schoolForm.value.name,
      type: this.schoolForm.value.type
    }

    this.store.dispatch(SchoolActions.addSchool({ schoolRequest: schoolRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.schoolForm.get(field)?.hasError(errorType) &&
      (this.schoolForm.get(field)?.dirty ||
        this.schoolForm.get(field)?.touched || this.isSubmitted);
  }
}
