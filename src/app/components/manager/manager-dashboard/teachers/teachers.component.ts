import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {errorSelector, isLoadingSelector, teachersSelector} from "../../../../store/selectors/teacher.selectors";
import * as TeacherActions from "../../../../store/actions/teacher.actions";
import {ClassResponse} from "../../../../models/response/class-response";
import {FormBuilder, Validators} from "@angular/forms";
import {classesSelector} from "../../../../store/selectors/class.selectors";
import {loadClassesBySchoolIdWithNoPagination} from "../../../../store/actions/class.actions";
import {TeacherClassRequest} from "../../../../models/request/teacher-class-request";
import {Page} from "../../../../models/page/page";
import {TeacherResponse} from "../../../../models/response/teacher-response";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  isLoading$: Observable<boolean>;
  teacherPage$: Observable<Page<TeacherResponse>>;
  error$: Observable<string | null>;
  teachers: TeacherResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router, private formBuilder: FormBuilder) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.teacherPage$ = this.store.pipe(select(teachersSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.classes$ = this.store.pipe(select(classesSelector))

  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
    this.store.dispatch(loadClassesBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.classes$.subscribe((data) => {
      this.classes = data.content;
      console.log(data.content)
    })
  }

  all(p: number, s: number) {
    this.store.dispatch(TeacherActions.loadTeachersBySchoolId({ schoolId: 1, page: p, size: s }));
    this.teacherPage$.subscribe(data => {
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

  isSubmitted: boolean = false;
  classes$: Observable<any>;
  classes: ClassResponse[] = [];

  teacherClassForm = this.formBuilder.group({
    teacherId: [null],
    classId: [null, [Validators.required]]
  });

  onSubmit() {
    const teacherClassRequest: TeacherClassRequest = {
      teacherId: this.teacherClassForm.value.teacherId,
      classId: this.teacherClassForm.value.classId
    }

    this.store.dispatch(TeacherActions.assignATeacherToAClass({ teacherClassRequest: teacherClassRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.teacherClassForm.get(field)?.hasError(errorType) &&
      (this.teacherClassForm.get(field)?.dirty ||
        this.teacherClassForm.get(field)?.touched || this.isSubmitted);
  }

  onClick(id: number) {
    this.teacherClassForm = this.formBuilder.group({
      teacherId: [id],
      classId: [null, [Validators.required]]
    });
    console.log(id)
  }
}
