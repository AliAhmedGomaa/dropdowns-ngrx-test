import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers";
import * as fromCourses from './reducers';

const coursesFs = createFeatureSelector<CoursesState>('courses');

export const allCoursesSelector = createSelector(
    coursesFs,
    fromCourses.selectAll
)

export const areCoursesLoaded = createSelector(
    coursesFs,
    state => state.allCoursesLoaded
)
