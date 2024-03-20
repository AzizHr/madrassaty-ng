import {SchoolRequest} from "../request/school-request";
import {UserResponse} from "./user-response";

export interface SpecialtyResponse {
  id: number;
  name: string;
  school: SchoolRequest;
  students: UserResponse[];
}
