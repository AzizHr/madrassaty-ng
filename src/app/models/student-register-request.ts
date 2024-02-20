import {User} from "./user";

export interface StudentRegisterRequest extends User{
    specialtyId: number;
    classId: number;
}
