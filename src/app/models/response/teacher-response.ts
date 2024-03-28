import {ProfileResponse} from "./profile-response";
import {SubjectRequest} from "../request/subject-request";

export interface TeacherResponse extends ProfileResponse {
  subject: SubjectRequest;
}
