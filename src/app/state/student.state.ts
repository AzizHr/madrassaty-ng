import {Page} from "../models/page/page";
import {StudentResponse} from "../models/response/student-response";

export interface StudentState {
  isLoading: boolean;
  studentPage: Page<StudentResponse>;
  selectedStudent: any;
  error: string | null;
}

export const initialState: StudentState = {
  isLoading: false,
  studentPage: null,
  selectedStudent: {},
  error: null
};
