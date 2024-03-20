import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpecialtyRequest} from "../../models/request/specialty-request";
import {SpecialtyResponse} from "../../models/response/specialty-response";
import {Page} from "../../models/page/page";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/specialties";

  public save(specialtyRequest: SpecialtyRequest): Observable<SpecialtyResponse> {
    return this.http.post<SpecialtyResponse>(this.api, specialtyRequest);
  }

  public getAllBySchoolId(schoolId: number, page: number, size: number): Observable<Page<SpecialtyResponse>> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<SpecialtyResponse>>(`${this.api}/school/${schoolId}`, { params });
  }

  public getAllBySchoolIdWithNoPagination(schoolId: number): Observable<Page<SpecialtyResponse>> {
    return this.http.get<Page<SpecialtyResponse>>(`${this.api}/school/${schoolId}`);
  }

}
