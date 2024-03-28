import {DurationType} from "../../enums/duration-type.enums";
import {ProfileResponse} from "./profile-response";

export interface AbsenceResponse {
  date: string;
  duration: number;
  durationType: DurationType;
  reason: string;
  isJustified: boolean;
  student: ProfileResponse;
}
