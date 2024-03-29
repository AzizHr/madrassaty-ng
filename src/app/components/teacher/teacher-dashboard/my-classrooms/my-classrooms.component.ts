import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ClassResponse} from "../../../../models/response/class-response";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {classesSelector, errorSelector, isLoadingSelector} from "../../../../store/selectors/class.selectors";
import {ProfileResponse} from "../../../../models/response/profile-response";
import Swal from "sweetalert2";
import * as ClassActions from "../../../../store/actions/class.actions";

@Component({
  selector: 'app-my-classrooms',
  templateUrl: './my-classrooms.component.html',
  styleUrls: ['./my-classrooms.component.css']
})
export class MyClassroomsComponent {

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


  showClassStudents(students: ProfileResponse[]) {
    let studentListHTML = '<div class="space-y-6" style="max-height: 300px; overflow-y: auto;">';
    students.forEach(student => {
      studentListHTML += `<div class="flex items-center gap-x-2">
        <img class="object-cover w-10 h-10 rounded-lg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="">
        <div>
            <h1 class="text-lg font-semibold text-gray-700 capitalize">${student.firstname + ' ' + student.lastname}</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">miajohn@merakiui.com</p>
        </div>
    </div>`;
    });
    studentListHTML += '</div>';

    Swal.fire({
      html: studentListHTML,
      showConfirmButton: false,
    });
  }


  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(ClassActions.loadClassesByTeacherId({ teacherId: 'j', page: p, size: s }));
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
