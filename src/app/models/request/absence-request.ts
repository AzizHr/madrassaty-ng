import {DurationType} from "../../enums/duration-type.enums";

export interface AbsenceRequest {
  duration: number;
  durationType: DurationType;
  reason: string;
  isJustified: boolean;
  studentId: number;
}
