import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesTabActions } from "./actions";
import { concatMap, map } from "rxjs/operators";
import { CoursesService } from "../services/courses.service";

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ) { }

    courses$ = createEffect(
        () => this.actions$.pipe(
            ofType(CoursesTabActions.loadAllCourses),
            concatMap(() => this.coursesService.getCourses()),
            map(courses => CoursesTabActions.allCoursesLoaded({ courses }))
        )
    )
}