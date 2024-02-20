import {User} from "./user";

export interface TeacherRegisterRequest extends User{
    subjectId: number;
}
