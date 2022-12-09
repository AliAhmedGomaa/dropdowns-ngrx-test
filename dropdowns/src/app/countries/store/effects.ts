import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CountriesService } from "../services/countries.service";
import { countiresTabActions } from "./actions";
import { Injectable } from "@angular/core";

@Injectable()
export class CountiresEffects {
    constructor(
        private actions$: Actions,
        private countriesService: CountriesService,
    ) { }

    courses$ = createEffect(
        () => this.actions$.pipe(
            ofType(countiresTabActions.loadAllCountries),
            concatMap(() => this.countriesService.getCountries()),
            map(data => countiresTabActions.allCountriesLoaded({ data }))
        )

    )
}