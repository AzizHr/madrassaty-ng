import {YearResponse} from "../models/response/year-response";

export interface YearState {
  isLoading: boolean;
  years: YearResponse[];
  selectedYear: any;
  error: string | null;
}

export const initialState: YearState = {
  isLoading: false,
  years: [],
  selectedYear: {},
  error: null
};
