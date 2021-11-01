import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/Product';
import { ProductService } from 'src/app/services/product.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { StarRatingComponent } from 'ng-starrating';

import {PRODUCTS} from "../../../mock-products"

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  comment:string="";
  rate:number=5;
  id! : number
  product: Product | undefined;
  showDetails:boolean = true;
  showComments:boolean = false;
  faUser = faUser;

  totalstars:number=5;
  readonly!:string;

  validate:boolean=this.comment.length? true:false;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  this.id = Number(routeParams.get('id'));
  this.productService.getOneProduct(this.id).subscribe((prod)=> {
    prod.rating = [(prod.rating.reduce((a,b)=>a+b)/prod.rating.length)]
    this.product=prod
  })
  
  }
  onSubmit(){

    this.productService.updateProduct(this.id, this.comment, this.rate).subscribe((prod)=>this.product=prod)
    this.comment = "";
    this.rate=5;

  }
  seeComments(){
    this.showComments = true;
    this.showDetails = false;
  }
  seeDetails(){
    this.showDetails = true;
    this.showComments = false;
  }


  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
      this.rate=$event.newValue
  }

}
