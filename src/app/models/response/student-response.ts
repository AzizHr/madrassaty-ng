import {SpecialtyRequest} from "../request/specialty-request";
import {ClassRequest} from "../request/class-request";
import {AbsenceRequest} from "../request/absence-request";
import {YearRequest} from "../request/year-request";
import {UserResponse} from "./user-response";

export interface StudentResponse extends UserResponse {
  specialty: SpecialtyRequest;
  _class: ClassRequest;
  absences: AbsenceRequest[];
  years: YearRequest[];
}
