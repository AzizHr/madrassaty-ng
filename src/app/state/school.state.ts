export interface SchoolState {
  isLoading: boolean;
  school: any;
  error: string | null;
}

export const initialState: SchoolState = {
  isLoading: false,
  school: {},
  error: null
};
