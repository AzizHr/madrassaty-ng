import {UserResponse} from "./user-response";
import {YearRequest} from "../request/year-request";

export interface StudentYearResponse {
  startsAt: string;
  endsAt: string;
  scholarYear: string;
  student: UserResponse;
  year: YearRequest;
}
