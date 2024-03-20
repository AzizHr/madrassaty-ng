import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../../models/response/user-response";
import {Page} from "../../models/page/page";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/students";

  public getAllBySchoolId(schoolId: number, page: number, size: number): Observable<Page<UserResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<UserResponse>>(`${this.api}/school/${schoolId}`, { params });
  }

  public getAllByClassId(classId: number, page: number, size: number): Observable<Page<UserResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<UserResponse>>(`${this.api}/class/${classId}`, { params });
  }

  public getAllBySchoolIdWithNoPagination(schoolId: number): Observable<Page<UserResponse>> {
    return this.http.get<Page<UserResponse>>(`${this.api}/school/${schoolId}`);
  }

  public getAllByClassIdWithNoPagination(classId: number): Observable<Page<UserResponse>> {
    return this.http.get<Page<UserResponse>>(`${this.api}/class/${classId}`);
  }
}
