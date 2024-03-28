import {ProfileResponse} from "./profile-response";
import {SpecialtyRequest} from "../request/specialty-request";
import {ClassRequest} from "../request/class-request";
import {AbsenceRequest} from "../request/absence-request";
import {YearRequest} from "../request/year-request";

export interface StudentProfileResponse extends ProfileResponse {
  specialty: SpecialtyRequest;
  _class: ClassRequest;
  absences: AbsenceRequest[];
  years: YearRequest[];
}
