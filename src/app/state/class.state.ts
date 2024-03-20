import {ClassResponse} from "../models/response/class-response";
import {Page} from "../models/page/page";
import {SpecialtyResponse} from "../models/response/specialty-response";

export interface ClassState {
  isLoading: boolean;
  classPage: Page<ClassResponse>;
  selectedClass: any;
  error: string | null;
}

export const initialState: ClassState = {
  isLoading: false,
  classPage: null,
  selectedClass: {},
  error: null
};
