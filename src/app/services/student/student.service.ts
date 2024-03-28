import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../models/page/page";
import {StudentResponse} from "../../models/response/student-response";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/students";

  public getAllBySchoolId(schoolId: number, page: number, size: number): Observable<Page<StudentResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<StudentResponse>>(`${this.api}/school/${schoolId}`, { params });
  }

  public getAllByClassId(classId: number, page: number, size: number): Observable<Page<StudentResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<StudentResponse>>(`${this.api}/class/${classId}`, { params });
  }

  public getAllBySchoolIdWithNoPagination(schoolId: number): Observable<Page<StudentResponse>> {
    return this.http.get<Page<StudentResponse>>(`${this.api}/school/${schoolId}`);
  }

  public getAllByClassIdWithNoPagination(classId: number): Observable<Page<StudentResponse>> {
    return this.http.get<Page<StudentResponse>>(`${this.api}/class/${classId}`);
  }
}
