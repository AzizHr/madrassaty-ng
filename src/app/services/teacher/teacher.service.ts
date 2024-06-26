import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileResponse} from "../../models/response/profile-response";
import {TeacherClassResponse} from "../../models/response/teacher-class-response";
import {TeacherClassRequest} from "../../models/request/teacher-class-request";
import {Page} from "../../models/page/page";
import {TeacherResponse} from "../../models/response/teacher-response";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/teachers";

  public getAllBySchoolId(schoolId: string, page: number, size: number): Observable<Page<TeacherResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<TeacherResponse>>(`${this.api}/school/${schoolId}`, { params });
  }

  public getAllBySchoolIdWithNoPagination(schoolId: string): Observable<Page<TeacherResponse>> {
    return this.http.get<Page<TeacherResponse>>(`${this.api}/school/${schoolId}`);
  }

  public getAllByClassId(classId: string, page: number, size: number): Observable<Page<TeacherResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<TeacherResponse>>(`${this.api}/class/${classId}`, { params });
  }

  assignATeacherToAClass(teacherClassRequest: TeacherClassRequest): Observable<TeacherClassResponse> {
    return this.http.post<TeacherClassResponse>('http://localhost:8080/api/assign/teacher/to/class', teacherClassRequest);
  }
}
