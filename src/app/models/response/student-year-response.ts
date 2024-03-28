import {ProfileResponse} from "./profile-response";
import {YearRequest} from "../request/year-request";

export interface StudentYearResponse {
  id: string;
  startsAt: string;
  endsAt: string;
  scholarYear: string;
  student: ProfileResponse;
  year: YearRequest;
}
