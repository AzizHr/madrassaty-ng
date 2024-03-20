import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.absences;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const absencesSelector = createSelector(selectFeature, (state) => state.absences);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
