import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubjectRequest} from "../../models/request/subject-request";
import {SubjectResponse} from "../../models/response/subject-response";
import {SpecialtySubjectRequest} from "../../models/request/specialty-subject-request";
import {SpecialtySubjectResponse} from "../../models/response/specialty-subject-response";
import {Page} from "../../models/page/page";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/subjects";

  public save(subjectRequest: SubjectRequest): Observable<SubjectResponse> {
    return this.http.post<SubjectResponse>(this.api, subjectRequest);
  }

  public getAllBySchoolId(specialtyId: string, page: number, size: number): Observable<Page<SubjectResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<SubjectResponse>>(`${this.api}/school/${specialtyId}`, { params });
  }

  public getAllBySchoolIdWithNoPagination(schoolId: string): Observable<Page<SubjectResponse>> {
    return this.http.get<Page<SubjectResponse>>(`${this.api}/school/${schoolId}`);
  }

  assignASubjectToASpecialty(specialtySubjectRequest: SpecialtySubjectRequest): Observable<SpecialtySubjectResponse> {
    return this.http.post<SpecialtySubjectResponse>('http://localhost:8080/api/assign/subject/to/specialty', specialtySubjectRequest);
  }
}
