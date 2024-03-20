import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.students;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const studentsSelector = createSelector(selectFeature, (state) => state.studentPage);
export const studentSelector = createSelector(selectFeature, (state) => state.selectedStudent);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
