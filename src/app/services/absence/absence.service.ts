import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AbsentRequest} from "../../models/request/absent-request";
import {AbsenceResponse} from "../../models/response/absence-response";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/absences";

  public noteAbsentForAStudent(absentRequest: AbsentRequest): Observable<AbsenceResponse> {
    return this.http.post<AbsenceResponse>(this.api, absentRequest);
  }

  public getAllByStudentId(studentId: number): Observable<AbsenceResponse[]> {
    return this.http.get<AbsenceResponse[]>(`${this.api}/student/${studentId}`);
  }
}
