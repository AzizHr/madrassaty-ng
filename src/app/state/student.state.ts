import {ProfileResponse} from "../models/response/profile-response";
import {Page} from "../models/page/page";

export interface StudentState {
  isLoading: boolean;
  studentPage: Page<ProfileResponse>;
  selectedStudent: any;
  error: string | null;
}

export const initialState: StudentState = {
  isLoading: false,
  studentPage: null,
  selectedStudent: {},
  error: null
};
