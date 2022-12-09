import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolver } from './resolvers/poducts.resolver';
import { EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { ProductEntityService } from './services/product-entity.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: { products: ProductsResolver }
  },
];


const entityMetaData: EntityMetadataMap = {
  Product: {
    
  }
}

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    ProductsResolver,
    ProductEntityService
  ]
})
export class ProductsModule {

  constructor(private eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityMetaData)
  }

}
