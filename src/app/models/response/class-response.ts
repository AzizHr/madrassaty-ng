import {SchoolRequest} from "../request/school-request";
import {UserResponse} from "./user-response";

export interface ClassResponse {
  id: number;
  name: string;
  school: SchoolRequest;
  students: UserResponse[];
}
