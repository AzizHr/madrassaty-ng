import {ProfileResponse} from "./profile-response";
import {SchoolRequest} from "../request/school-request";

export interface ManagerResponse extends ProfileResponse {
  school: SchoolRequest;
}
