import {SchoolRequest} from "../request/school-request";

export interface YearResponse {
  id: number;
  year: string;
  school: SchoolRequest;
}
