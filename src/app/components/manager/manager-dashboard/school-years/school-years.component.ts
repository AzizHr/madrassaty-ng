import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import * as YearActions from "../../../../store/actions/year.actions";
import {YearResponse} from "../../../../models/response/year-response";
import {errorSelector, isLoadingSelector, yearsSelector} from "../../../../store/selectors/year.selectors";

@Component({
  selector: 'app-school-years',
  templateUrl: './school-years.component.html',
  styleUrls: ['./school-years.component.css']
})
export class SchoolYearsComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  years$: Observable<YearResponse[]>;

  years: YearResponse[] = [];

  isSubmitted = false;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.years$ = this.store.pipe(select(yearsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(YearActions.loadYearsBySchoolId({ schoolId: '2' }));
    this.years$.subscribe((data) => {
      this.years = data;
      console.log(data);
    });
  }
}
