import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../state/app.state";
import {Router} from "@angular/router";
import * as YearActions from "../../../../../store/actions/year.actions";
import {YearRequest} from "../../../../../models/request/year-request";

@Component({
  selector: 'app-add-year',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.css']
})
export class AddYearComponent {
  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

  yearForm = this.formBuilder.group({
    year: ['', [Validators.required]]
  });

  onSubmit() {
    const yearRequest: YearRequest = {
      year: this.yearForm.value.year,
      schoolId: 1
    }

    this.store.dispatch(YearActions.addYear({ yearRequest: yearRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.yearForm.get(field)?.hasError(errorType) &&
        (this.yearForm.get(field)?.dirty ||
            this.yearForm.get(field)?.touched || this.isSubmitted);
  }
}
