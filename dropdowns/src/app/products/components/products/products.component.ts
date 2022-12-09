import { Component, OnInit } from '@angular/core';
import { ProductEntityService } from '../../services/product-entity.service';

import { Observable } from "rxjs";
import { IProduct } from '../../types/product.inerface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  allProducts$!: Observable<IProduct[]>;

  constructor(private productEntityService: ProductEntityService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.allProducts$ = this.productEntityService.entities$;
  }

}
