import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { map, tap, first, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductEntityService } from '../services/product-entity.service';


@Injectable()
export class ProductsResolver implements Resolve<boolean> {
    loaded = false;
    constructor(private productEntityService: ProductEntityService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.productEntityService.loaded$.pipe(
            tap(loaded => {
                if (!loaded) {
                    this.productEntityService.getAll()
                }
            }),
            filter(loaded => !!loaded),
            first()
        )
    }
}
