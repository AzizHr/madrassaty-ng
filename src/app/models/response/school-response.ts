import {SchoolType} from "../../enums/school-type.enums";
import {YearRequest} from "../request/year-request";
import {SpecialtyRequest} from "../request/specialty-request";
import {ProfileResponse} from "./profile-response";
import {ClassRequest} from "../request/class-request";

export interface SchoolResponse {
  id: number;
  name: string;
  type: SchoolType;
  years: YearRequest[];
  specialties: SpecialtyRequest[];
  managers: ProfileResponse[];
  classes: ClassRequest[];
}
