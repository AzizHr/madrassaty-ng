import {SchoolRequest} from "../request/school-request";

export interface YearResponse {
  id: string;
  year: string;
  school: SchoolRequest;
}
