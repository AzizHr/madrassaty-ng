import {ProfileResponse} from "./profile-response";
import {SchoolRequest} from "../request/school-request";

export interface ManagerProfileResponse extends ProfileResponse {
  school: SchoolRequest;
}
