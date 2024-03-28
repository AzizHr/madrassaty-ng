import {Page} from "../models/page/page";
import {TeacherResponse} from "../models/response/teacher-response";

export interface TeacherState {
  isLoading: boolean;
  teacherPage: Page<TeacherResponse>;
  selectedTeacher: any;
  error: string | null;
}

export const initialState: TeacherState = {
  isLoading: false,
  teacherPage: null,
  selectedTeacher: {},
  error: null
};
