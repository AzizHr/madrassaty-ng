import {User} from "./user";

export interface ManagerRegisterRequest extends User {
    schoolId: number;
}
