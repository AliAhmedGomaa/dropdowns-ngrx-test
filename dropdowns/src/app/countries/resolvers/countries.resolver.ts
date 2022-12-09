import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ICountry } from "../types/country.interface";

import { IAppState } from "../../shared/types/AppState.interface";
import { select, Store } from "@ngrx/store";
import { tap, finalize, first } from "rxjs/operators";
import { countiresTabActions } from "../store/actions";
import { Injectable } from "@angular/core";
import { allCountriesLoadedSelector } from "../store/selector";
import { Observable } from "rxjs";

@Injectable()
export class CountriesResolver implements Resolve<ICountry[]>{
    loaded = false;
    constructor(private store: Store<IAppState>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(allCountriesLoadedSelector),
            tap((allCoursesLoaded) => {

                if (!this.loaded && !allCoursesLoaded) {
                    this.loaded = true
                    return this.store.dispatch(countiresTabActions.loadAllCountries());
                }

            }),
            first(),
            finalize(() => this.loaded = false)
        )
    }
}