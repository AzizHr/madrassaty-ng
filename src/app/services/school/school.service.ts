import { Injectable } from '@angular/core';
import {SchoolRequest} from "../../models/request/school-request";
import {Observable} from "rxjs";
import {SchoolResponse} from "../../models/response/school-response";
import {HttpClient} from "@angular/common/http";
import {ClassResponse} from "../../models/response/class-response";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/schools";

  public save(schoolRequest: SchoolRequest): Observable<SchoolResponse> {
    return this.http.post<SchoolResponse>(this.api, schoolRequest);
  }

  public getByManagerId(managerId: string): Observable<SchoolResponse> {
    return this.http.get<SchoolResponse>(`${this.api}/by/manager/${managerId}`);
  }

}
