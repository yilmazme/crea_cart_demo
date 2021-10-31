import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/Product';
import { ProductService } from 'src/app/services/product.service';

import {PRODUCTS} from "../../../mock-products"

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  name!:string;
  id! : number
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  this.id = Number(routeParams.get('id'));

  this.productService.getOneProduct(this.id).subscribe((prod)=> this.product=prod)

  }

  onSubmit(){

    this.productService.updateProduct(this.id, this.name).subscribe((prod)=>this.product=prod)

  }
}
