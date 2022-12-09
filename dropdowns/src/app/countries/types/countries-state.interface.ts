import { ICountry } from "./country.interface";

export interface ICountriesState{
    data: ICountry[],
    allCountriesLoaded: boolean
}