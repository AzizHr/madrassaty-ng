import {ProfileResponse} from "./profile-response";
import {SubjectRequest} from "../request/subject-request";

export interface TeacherProfileResponse extends ProfileResponse {
  subject: SubjectRequest;
}
