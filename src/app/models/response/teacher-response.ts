import {SubjectRequest} from "../request/subject-request";
import {UserResponse} from "./user-response";

export interface TeacherResponse extends UserResponse {
  subject: SubjectRequest;
}
