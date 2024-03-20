import {UserResponse} from "../models/response/user-response";
import {Page} from "../models/page/page";

export interface StudentState {
  isLoading: boolean;
  studentPage: Page<UserResponse>;
  selectedStudent: any;
  error: string | null;
}

export const initialState: StudentState = {
  isLoading: false,
  studentPage: null,
  selectedStudent: {},
  error: null
};
