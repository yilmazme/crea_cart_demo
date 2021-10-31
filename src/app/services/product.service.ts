import { Injectable } from '@angular/core';
import { Product } from 'src/Product';
import {Observable, of} from "rxjs";

import {PRODUCTS} from "../../mock-products"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts() : Observable<Product[]>{
    const products = of(PRODUCTS)
    return products;
  }
}
