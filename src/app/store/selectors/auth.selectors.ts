import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.auth;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const authSelector = createSelector(selectFeature, (state) => state.auth);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
