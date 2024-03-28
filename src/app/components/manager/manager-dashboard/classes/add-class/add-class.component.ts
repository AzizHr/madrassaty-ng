import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../state/app.state";
import {Router} from "@angular/router";
import {ClassRequest} from "../../../../../models/request/class-request";
import * as ClassActions from '../../../../../store/actions/class.actions';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {

  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

  classForm = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  onSubmit() {
    const classRequest: ClassRequest = {
      name: this.classForm.value.name,
      schoolId: 1
    }

    this.store.dispatch(ClassActions.addClass({ classRequest: classRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.classForm.get(field)?.hasError(errorType) &&
      (this.classForm.get(field)?.dirty ||
        this.classForm.get(field)?.touched || this.isSubmitted);
  }

}
