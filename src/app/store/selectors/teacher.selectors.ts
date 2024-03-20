import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.teachers;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const teachersSelector = createSelector(selectFeature, (state) => state.teacherPage);
export const teacherSelector = createSelector(selectFeature, (state) => state.selectedTeacher);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
