import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {SpecialtyResponse} from "../../../../models/response/specialty-response";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {errorSelector, isLoadingSelector, specialtiesSelector} from "../../../../store/selectors/specialty.selectors";
import * as SpecialtyActions from "../../../../store/actions/specialty.actions";

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent {

  isLoading$: Observable<boolean>;
  specialties$: Observable<any>;
  error$: Observable<string | null>;
  specialties: SpecialtyResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.specialties$ = this.store.pipe(select(specialtiesSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(SpecialtyActions.loadSpecialtiesBySchoolId({ schoolId: 1, page: p, size: s }));
    this.specialties$.subscribe(data => {
      console.log(data)
      this.specialties = data.content;
      this.totalElements = data.totalElements;
      this.totalPages = Math.ceil(this.totalElements / this.limit);
      this.pages = [...Array(this.totalPages).keys()];
    });
  }

  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages - 1;
  }

  onPageChange(event: any) {
    const page = event.page;
    const pageSize = event.rows;
    this.currentPage = page;
    this.all(page, pageSize);
  }

}
