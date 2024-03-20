import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.specialties;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const specialtiesSelector = createSelector(selectFeature, (state) => state.specialtyPage);
export const specialtySelector = createSelector(selectFeature, (state) => state.selectedSpecialty);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
