import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICountry } from '../types/country.interface';

export const countiresTabActions = createActionGroup({
    source: 'Countires Tab',
    events: {
        'Load All Countries': emptyProps(),
        'All Countries Loaded': props<{ data: ICountry[] }>(),
    }
});