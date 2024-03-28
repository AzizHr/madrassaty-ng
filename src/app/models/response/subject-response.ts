import {ProfileResponse} from "./profile-response";
import {SchoolRequest} from "../request/school-request";

export interface SubjectResponse {
  id: number;
  name: string;
  school: SchoolRequest;
  teachers: ProfileResponse[];
}
