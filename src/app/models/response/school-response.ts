import {SchoolType} from "../../enums/school-type.enums";
import {YearRequest} from "../request/year-request";
import {SpecialtyRequest} from "../request/specialty-request";
import {UserResponse} from "./user-response";
import {ClassRequest} from "../request/class-request";

export interface SchoolResponse {
  name: string;
  type: SchoolType;
  years: YearRequest[];
  specialties: SpecialtyRequest[];
  managers: UserResponse[];
  classes: ClassRequest[];
}
