import {ProfileResponse} from "./profile-response";
import {SchoolRequest} from "../request/school-request";

export interface SubjectResponse {
  id: string;
  name: string;
  school: SchoolRequest;
  teachers: ProfileResponse[];
}
