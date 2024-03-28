import * as UserActions from '../actions/user.actions';
import {createReducer, on} from "@ngrx/store";

export const userReducer = createReducer(
  initialState,
  // Get Logged In User
  on(UserActions.getLoggedInUser, (state) => ({ ...state, isLoading: true })),
  on(UserActions.getLoggedInUserSuccess, (state, action) => ({ ...state, isLoading: false, user: action.user })),
  on(UserActions.getLoggedInUserFailure, (state, action) => ({ ...state, error: action.error })),
);
