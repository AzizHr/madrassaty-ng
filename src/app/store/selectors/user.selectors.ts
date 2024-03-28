import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.user;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const userSelector = createSelector(selectFeature, (state) => state.user);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
