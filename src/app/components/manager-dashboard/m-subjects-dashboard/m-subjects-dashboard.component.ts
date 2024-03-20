import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as SubjectActions from "../../../store/actions/subject.actions";
import {SubjectResponse} from "../../../models/response/subject-response";
import {errorSelector, isLoadingSelector, subjectsSelector} from "../../../store/selectors/subject.selectors";
import {Page} from "../../../models/page/page";

@Component({
  selector: 'app-m-subjects-dashboard',
  templateUrl: './m-subjects-dashboard.component.html',
  styleUrls: ['./m-subjects-dashboard.component.css']
})
export class MSubjectsDashboardComponent implements OnInit {

  isLoading$: Observable<boolean>;
  subjectPage$: Observable<Page<SubjectResponse>>;
  error$: Observable<string | null>;
  subjects: SubjectResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.subjectPage$ = this.store.pipe(select(subjectsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(SubjectActions.loadSubjectsBySchoolId({ schoolId: 1, page: p, size: s }));
    this.subjectPage$.subscribe(data => {
      this.subjects = data.content;
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
