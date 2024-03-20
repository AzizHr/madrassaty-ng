import {UserResponse} from "./user-response";
import {SchoolRequest} from "../request/school-request";

export interface SubjectResponse {
  id: number;
  name: string;
  school: SchoolRequest;
  teachers: UserResponse[];
}
