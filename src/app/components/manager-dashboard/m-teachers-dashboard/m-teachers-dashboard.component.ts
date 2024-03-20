import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {UserResponse} from "../../../models/response/user-response";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as TeacherActions from "../../../store/actions/teacher.actions";
import {errorSelector, isLoadingSelector, teachersSelector} from "../../../store/selectors/teacher.selectors";

@Component({
  selector: 'app-m-teachers-dashboard',
  templateUrl: './m-teachers-dashboard.component.html',
  styleUrls: ['./m-teachers-dashboard.component.css']
})
export class MTeachersDashboardComponent {

  isLoading$: Observable<boolean>;
  teachers$: Observable<any>;
  error$: Observable<string | null>;
  teachers: UserResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.teachers$ = this.store.pipe(select(teachersSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(TeacherActions.loadTeachersBySchoolId({ schoolId: 1, page: p, size: s }));
    this.teachers$.subscribe(data => {
      this.teachers = data.content;
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
