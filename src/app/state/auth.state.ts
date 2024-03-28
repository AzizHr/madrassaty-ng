import {ManagerProfileResponse} from "../models/response/manager-profile-response";
import {StudentProfileResponse} from "../models/response/student-profile-response";
import {TeacherProfileResponse} from "../models/response/teacher-profile-response";

export interface AuthState {
  isLoading: boolean;
  auth: ManagerProfileResponse | StudentProfileResponse | TeacherProfileResponse | null;
  error: string | null;
}

export const initialState: AuthState = {
  isLoading: false,
  auth: null,
  error: null
};
