import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/types/AppState.interface";
import { ICountriesState } from "../types/countries-state.interface";

const countriesFs = createFeatureSelector<ICountriesState>('countries');

export const allCountriesLoadedSelector = createSelector(
    countriesFs,
    (state) => state.allCountriesLoaded
)

export const allCountriesSelector = createSelector(
    countriesFs,
    (state) => state.data
)

