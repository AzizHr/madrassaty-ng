import {Role} from "../../enums/role.enums";

export interface UserResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  image: string;
}
