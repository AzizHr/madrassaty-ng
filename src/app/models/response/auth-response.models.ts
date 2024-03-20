import {Role} from "../../enums/role.enums";

export interface AuthResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  image: string;
  token: string;
}
