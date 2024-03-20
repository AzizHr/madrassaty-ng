import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.school;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const schoolSelector = createSelector(selectFeature, (state) => state.school);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
