import { Injectable } from '@angular/core';
import { Product } from 'src/Product';
import {Observable, of} from "rxjs";

import {PRODUCTS} from "../../mock-products"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    const localProducts = JSON.parse(localStorage.getItem('products') || '[]')
    if(localProducts.length){
      // mock data'nın yapılan değişiklikleri değiştirmemesi için
      return
    }
    localStorage.setItem("products",JSON.stringify(PRODUCTS))
  }


  getProducts() : Observable<Product[]>{
   const localProducts = JSON.parse(localStorage.getItem('products') || '[]')
    const products = of(localProducts)
    return products;
  }
  getOneProduct(id:number) : Observable<Product>{
   const localProducts = JSON.parse(localStorage.getItem('products') || '[]')
   const oneProduct = localProducts.find((prod: { id: number; })=>prod.id === id)
    const product = of(oneProduct)
    return product;
  }

  updateProduct(id:number, name:string) :Observable<Product>{
    const filteredProduct = PRODUCTS.filter((prod: { id: number; })=>prod.id === id)[0]
    filteredProduct.name = name;
    localStorage.setItem("products",JSON.stringify(PRODUCTS))
    const product = of(filteredProduct)
   
    return product

  }

}
