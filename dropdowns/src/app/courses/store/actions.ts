import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICourse } from '../types/Course.interface';

export const CoursesTabActions = createActionGroup({
    source: 'Courses Tab',
    events: {
        'Load All Courses': emptyProps(),
        'All Courses loaded': props<{ courses: ICourse[] }>(),
    }
});