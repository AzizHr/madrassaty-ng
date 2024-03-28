import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.years;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const yearsSelector = createSelector(selectFeature, (state) => state.years);
export const yearSelector = createSelector(selectFeature, (state) => state.selectedYear);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
