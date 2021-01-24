import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  currentUser: any= [];
  userId: any;
  productInfo: any = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductInfo(111)
    .subscribe((data) => {
      console.log(data);
      this.productInfo = data;
    });
  }


  getQuantity(productCode){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId= this.currentUser[0]['userId'];
    console.log(this.productService.getQuantity(productCode, this.userId));
    return this.productService.getQuantity(productCode, this.userId);
  }

  addToCart(product){

  }

  removeFromCart(product){

  }

}
