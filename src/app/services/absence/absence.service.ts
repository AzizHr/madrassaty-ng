import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AbsenceRequest} from "../../models/request/absence-request";
import {AbsenceResponse} from "../../models/response/absence-response";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/absences";

  public noteAbsentForAStudent(absentRequest: AbsenceRequest): Observable<AbsenceResponse> {
    return this.http.post<AbsenceResponse>(this.api, absentRequest);
  }

  public getAllByStudentId(studentId: number): Observable<AbsenceResponse[]> {
    return this.http.get<AbsenceResponse[]>(`${this.api}/student/${studentId}`);
  }
}
