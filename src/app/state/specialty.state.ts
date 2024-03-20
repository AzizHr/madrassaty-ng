import {SpecialtyResponse} from "../models/response/specialty-response";
import {Page} from "../models/page/page";

export interface SpecialtyState {
  isLoading: boolean;
  specialtyPage: Page<SpecialtyResponse>;
  selectedSpecialty: any;
  error: string | null;
}

export const initialState: SpecialtyState = {
  isLoading: false,
  specialtyPage: null,
  selectedSpecialty: {},
  error: null
};
