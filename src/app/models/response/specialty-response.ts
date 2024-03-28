import {SchoolRequest} from "../request/school-request";
import {ProfileResponse} from "./profile-response";

export interface SpecialtyResponse {
  id: number;
  name: string;
  school: SchoolRequest;
  students: ProfileResponse[];
}
