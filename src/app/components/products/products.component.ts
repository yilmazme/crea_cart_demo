import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Product';
import { ProductService } from 'src/app/services/product.service';
import { StarRatingComponent } from 'ng-starrating';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products: Product[] = [];
totalstars:number=5;
readonly:boolean=true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe((products)=>this.products=products)
   for (let i = 0; i < this.products.length; i++) {
     
    this.products[i].rating = [(this.products[i].rating.reduce((a,b)=>a+b)/this.products[i].rating.length)]
     
   }

  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
