import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../state/app.state";
import {Router} from "@angular/router";
import {SpecialtyRequest} from "../../../../../models/request/specialty-request";
import * as SpecialtyActions from '../../../../../store/actions/specialty.actions';

@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css']
})
export class AddSpecialtyComponent {

  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

  specialtyForm = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  onSubmit() {
    const specialtyRequest: SpecialtyRequest = {
      name: this.specialtyForm.value.name,
      schoolId: 1
    }

    this.store.dispatch(SpecialtyActions.addSpecialty({ specialtyRequest: specialtyRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.specialtyForm.get(field)?.hasError(errorType) &&
      (this.specialtyForm.get(field)?.dirty ||
        this.specialtyForm.get(field)?.touched || this.isSubmitted);
  }

}
