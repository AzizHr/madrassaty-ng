import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.subjects;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const subjectsSelector = createSelector(selectFeature, (state) => state.subjectPage);
export const subjectSelector = createSelector(selectFeature, (state) => state.selectedSubject);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
