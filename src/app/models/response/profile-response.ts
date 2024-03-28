import {Role} from "../../enums/role.enums";
import {StatusType} from "../../enums/status-type.enums";

export interface ProfileResponse {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  status: StatusType;
  city: string;
  address: string;
  image: string;
  role: Role;
}
