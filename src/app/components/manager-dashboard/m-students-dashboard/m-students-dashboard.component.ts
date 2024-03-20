import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as StudentActions from "../../../store/actions/student.actions";
import {UserResponse} from "../../../models/response/user-response";
import {errorSelector, isLoadingSelector, studentsSelector} from "../../../store/selectors/student.selectors";

@Component({
  selector: 'app-m-students-dashboard',
  templateUrl: './m-students-dashboard.component.html',
  styleUrls: ['./m-students-dashboard.component.css']
})
export class MStudentsDashboardComponent implements OnInit {

  isLoading$: Observable<boolean>;
  students$: Observable<any>;
  error$: Observable<string | null>;
  students: UserResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.students$ = this.store.pipe(select(studentsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(StudentActions.loadStudentsBySchoolId({ schoolId: 1, page: p, size: s }));
    this.students$.subscribe(data => {
      this.students = data.content;
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

