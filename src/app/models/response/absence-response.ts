import {DurationType} from "../../enums/duration-type.enums";
import {UserResponse} from "./user-response";

export interface AbsenceResponse {
  date: string;
  duration: number;
  durationType: DurationType;
  reason: string;
  isJustified: boolean;
  student: UserResponse;
}
