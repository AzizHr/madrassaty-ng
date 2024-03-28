import {ProfileResponse} from "../models/response/profile-response";
import {Page} from "../models/page/page";

export interface TeacherState {
  isLoading: boolean;
  teacherPage: Page<ProfileResponse>;
  selectedTeacher: any;
  error: string | null;
}

export const initialState: TeacherState = {
  isLoading: false,
  teacherPage: null,
  selectedTeacher: {},
  error: null
};
