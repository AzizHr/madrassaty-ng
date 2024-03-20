import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassRequest} from "../../models/request/class-request";
import {ClassResponse} from "../../models/response/class-response";
import {Page} from "../../models/page/page";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/classes";

  public save(classRequest: ClassRequest): Observable<ClassResponse> {
    return this.http.post<ClassResponse>(this.api, classRequest);
  }

  public getAllBySchoolId(schoolId: number, page: number, size: number): Observable<Page<ClassResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<ClassResponse>>(`${this.api}/school/${schoolId}`, { params });
  }

  public getAllBySchoolIdWithNoPagination(schoolId: number): Observable<Page<ClassResponse>> {
    return this.http.get<Page<ClassResponse>>(`${this.api}/school/${schoolId}`);
  }

  public getAllByTeacherId(teacherId: number, page: number, size: number): Observable<Page<ClassResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<ClassResponse>>(`${this.api}/teacher/${teacherId}`, { params });
  }

  public getAllByTeacherIdWithNoPagination(teacherId: number): Observable<Page<ClassResponse>> {
    return this.http.get<Page<ClassResponse>>(`${this.api}/teacher/${teacherId}`);
  }

}
