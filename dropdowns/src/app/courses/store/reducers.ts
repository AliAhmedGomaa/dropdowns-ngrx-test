import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from "@ngrx/store";
import { ICourse } from "../types/Course.interface";
import { CoursesTabActions } from "./actions";

export interface CoursesState extends EntityState<ICourse> {
    allCoursesLoaded: boolean
}

export const adapter: EntityAdapter<ICourse> = createEntityAdapter<ICourse>();

const initialCoursesState = adapter.getInitialState();

export const coursesReducers = createReducer(
    initialCoursesState,
    on(CoursesTabActions.allCoursesLoaded, (state, action) => adapter.setAll(action.courses, { ...state, allCoursesLoaded: true }))
)

export const { selectAll } = adapter.getSelectors();

