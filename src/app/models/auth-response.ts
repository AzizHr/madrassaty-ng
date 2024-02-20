import {Role} from "../enums/role";

export interface AuthResponse {
    firstname: string;
    lastname: string;
    email: string;
    role: Role;
    image: string;
    token: string;
}
