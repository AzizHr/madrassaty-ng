import {UserResponse} from "../models/response/user-response";
import {Page} from "../models/page/page";

export interface TeacherState {
  isLoading: boolean;
  teacherPage: Page<UserResponse>;
  selectedTeacher: any;
  error: string | null;
}

export const initialState: TeacherState = {
  isLoading: false,
  teacherPage: null,
  selectedTeacher: {},
  error: null
};
