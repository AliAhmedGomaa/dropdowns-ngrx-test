import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { IProduct } from "../types/product.inerface";


@Injectable()
export class ProductEntityService extends EntityCollectionServiceBase<IProduct>{
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super("Product", serviceElementsFactory);
    }
}