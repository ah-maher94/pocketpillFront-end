import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  categories: any;
  products: any;

  constructor(private http: HttpClient, 
    private authService: AuthServiceService) {}

  async ngOnInit(): Promise<void> {
    this.authService.authUser();
    try {
      await this.http
        .get('https://pocket-pills.herokuapp.com/api/category')
        .subscribe((res) => {
          this.categories = res;
        });

    

      this.http
        .get('https://pocket-pills.herokuapp.com/api/products')
        .subscribe((res) => {
          this.products = res;
        });

      
    } catch (error) {}
  }

  deleteCategory(categoryName) {
    console.log(categoryName); 
    this.http
    .delete('https://pocket-pills.herokuapp.com/api/category/' + categoryName)
    .subscribe((res) => {
      // this.categories = res;
      });
  }

  deleteProduct(productCode) {
    this.http
    .delete('https://pocket-pills.herokuapp.com/api/products/' + productCode)
    .subscribe((res) => {
      // this.products = res;
      });
  }


}
