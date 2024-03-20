import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../../models/response/user-response";
import {SpecialtySubjectRequest} from "../../models/request/specialty-subject-request";
import {SpecialtySubjectResponse} from "../../models/response/specialty-subject-response";
import {TeacherClassResponse} from "../../models/response/teacher-class-response";
import {TeacherClassRequest} from "../../models/request/teacher-class-request";
import {Page} from "../../models/page/page";
import {SubjectResponse} from "../../models/response/subject-response";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/teachers";

  public getAllBySchoolId(schoolId: number, page: number, size: number): Observable<Page<UserResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<UserResponse>>(`${this.api}/school/${schoolId}`, { params });
  }

  public getAllBySchoolIdWithNoPagination(schoolId: number): Observable<Page<UserResponse>> {
    return this.http.get<Page<UserResponse>>(`${this.api}/school/${schoolId}`);
  }

  public getAllByClassId(classId: number, page: number, size: number): Observable<Page<UserResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<UserResponse>>(`${this.api}/class/${classId}`, { params });
  }

  assignATeacherToAClass(teacherClassRequest: TeacherClassRequest): Observable<TeacherClassResponse> {
    return this.http.post<TeacherClassResponse>('http://localhost:8080/api/assign/teacher/to/class', teacherClassRequest);
  }
}
