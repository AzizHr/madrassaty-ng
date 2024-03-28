import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../state/app.state';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Page } from '../../../../models/page/page';
import { SubjectResponse } from '../../../../models/response/subject-response';
import { SpecialtyResponse } from '../../../../models/response/specialty-response';
import { SpecialtySubjectRequest } from '../../../../models/request/specialty-subject-request';
import { isLoadingSelector, errorSelector, subjectsSelector } from '../../../../store/selectors/subject.selectors';
import { specialtiesSelector } from '../../../../store/selectors/specialty.selectors';
import * as SubjectActions from '../../../../store/actions/subject.actions';
import { loadSpecialtiesBySchoolIdWithNoPagination } from '../../../../store/actions/specialty.actions';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  subjectPage$: Observable<Page<SubjectResponse>>;
  specialties$: Observable<any>;

  subjects: SubjectResponse[] = [];
  specialties: SpecialtyResponse[] = [];

  currentPage = 0;
  totalElements = 0;
  limit = 3;
  totalPages = 0;
  pages: number[];

  isSubmitted = false;

  specialtySubjectForm = this.formBuilder.group({
    specialtyId: [null, [Validators.required]],
    subjectId: [null]
  });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.subjectPage$ = this.store.pipe(select(subjectsSelector));
    this.specialties$ = this.store.pipe(select(specialtiesSelector));
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
    this.store.dispatch(loadSpecialtiesBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.specialties$.subscribe((data) => {
      this.specialties = data.content;
      console.log(data.content);
    });
  }

  all(p: number, s: number): void {
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

  onPageChange(event: any): void {
    const page = event.page;
    const pageSize = event.rows;
    this.currentPage = page;
    this.all(page, pageSize);
  }

  onSubmit(): void {
    const specialtySubjectRequest: SpecialtySubjectRequest = {
      specialtyId: this.specialtySubjectForm.value.specialtyId,
      subjectId: this.specialtySubjectForm.value.subjectId
    };

    this.store.dispatch(SubjectActions.assignASubjectToASpecialty({ specialtySubjectRequest }));
    this.isSubmitted = true;
  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.specialtySubjectForm.get(field)?.hasError(errorType) &&
      (this.specialtySubjectForm.get(field)?.dirty ||
        this.specialtySubjectForm.get(field)?.touched || this.isSubmitted);
  }

  onClick(id: number) {
    this.specialtySubjectForm = this.formBuilder.group({
      specialtyId: [null, [Validators.required]],
      subjectId: [id]
    });
    console.log(id)
  }
}
