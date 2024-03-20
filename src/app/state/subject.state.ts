import {SubjectResponse} from "../models/response/subject-response";
import {Page} from "../models/page/page";

export interface SubjectState {
  isLoading: boolean;
  subjectPage: Page<SubjectResponse>;
  selectedSubject: any;
  error: string | null;
}

export const initialState: SubjectState = {
  isLoading: false,
  subjectPage: null,
  selectedSubject: {},
  error: null
};
