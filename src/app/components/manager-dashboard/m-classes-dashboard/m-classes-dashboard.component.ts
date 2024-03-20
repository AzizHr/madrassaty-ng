import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as ClassActions from "../../../store/actions/class.actions";
import {ClassResponse} from "../../../models/response/class-response";
import {classesSelector, errorSelector, isLoadingSelector} from "../../../store/selectors/class.selectors";

@Component({
  selector: 'app-m-classes-dashboard',
  templateUrl: './m-classes-dashboard.component.html',
  styleUrls: ['./m-classes-dashboard.component.css']
})
export class MClassesDashboardComponent {

  isLoading$: Observable<boolean>;
  classes$: Observable<any>;
  error$: Observable<string | null>;
  classes: ClassResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.classes$ = this.store.pipe(select(classesSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(ClassActions.loadClassesBySchoolId({ schoolId: 1, page: p, size: s }));
    this.classes$.subscribe(data => {
      this.classes = data.content;
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
