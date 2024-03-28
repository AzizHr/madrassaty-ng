import {SchoolRequest} from "../request/school-request";
import {ProfileResponse} from "./profile-response";

export interface ClassResponse {
  id: number;
  name: string;
  school: SchoolRequest;
  students: ProfileResponse[];
}
