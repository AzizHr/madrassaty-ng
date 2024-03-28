import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {YearResponse} from "../../models/response/year-response";
import {YearRequest} from "../../models/request/year-request";

@Injectable({
  providedIn: 'root'
})
export class YearService {
  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/years";

  public save(yearRequest: YearRequest): Observable<YearResponse> {
    return this.http.post<YearResponse>(this.api, yearRequest);
  }

  public getAllBySchoolId(schoolId: string): Observable<YearResponse[]> {
    return this.http.get<YearResponse[]>(`${this.api}/school/${schoolId}`);
  }
}
