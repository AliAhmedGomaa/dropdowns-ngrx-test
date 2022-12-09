import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProduct } from '../types/product.inerface';

export const ProductsTabActions = createActionGroup({
    source: 'Products Tab',
    events: {
        'Load All Products': emptyProps(),
        'All Products loaded': props<{ products: IProduct[] }>(),
    }
});