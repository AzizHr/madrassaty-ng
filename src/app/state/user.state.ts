import {ManagerResponse} from "../models/response/manager-response";
import {StudentResponse} from "../models/response/student-response";
import {TeacherResponse} from "../models/response/teacher-response";

export interface UserState {
  isLoading: boolean;
  user: ManagerResponse | StudentResponse | TeacherResponse | null;
  error: string | null;
}

export const initialState: UserState = {
  isLoading: false,
  user: null,
  error: null
};
