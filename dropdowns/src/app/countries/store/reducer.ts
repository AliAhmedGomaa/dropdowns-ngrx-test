import { createReducer, on } from "@ngrx/store";
import { ICountriesState } from "../types/countries-state.interface";
import { countiresTabActions } from "./actions";

const initialCountriesState: ICountriesState = {
    data: [],
    allCountriesLoaded: false
}

export const countriesReducer = createReducer(
    initialCountriesState,
    on(countiresTabActions.allCountriesLoaded, (state, action) => ({ data: action.data, allCountriesLoaded: true }))
)




