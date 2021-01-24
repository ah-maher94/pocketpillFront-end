import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = 'https://pocket-pills.herokuapp.com/api';


  currentUser: any = [];
  userId: any;
  constructor(private http: HttpClient) { }

  getUserOrders(){
    if(localStorage.getItem('currentUser')){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.userId = this.currentUser[0]['userId'];
      return this.http.get(`${this.baseUrl}/customer/${this.userId}/orders`);
    }
  }
}
