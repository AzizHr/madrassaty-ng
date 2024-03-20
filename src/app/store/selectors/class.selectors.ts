import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.classes;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const classesSelector = createSelector(selectFeature, (state) => state.classPage);
export const classSelector = createSelector(selectFeature, (state) => state.selectedClass);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
