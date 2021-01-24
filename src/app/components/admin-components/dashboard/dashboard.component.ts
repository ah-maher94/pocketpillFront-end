import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // orders: Object;
  adminOrders: any = [];
  constructor(private http: HttpClient,
    private authService: AuthServiceService,
    private orderService: OrdersService) { }

    async ngOnInit(): Promise<void> {
      this.authService.authUser();

      this.orderService.getAdminOrders().subscribe((data) => {
        // console.log(data);
        this.adminOrders = data;
      });
  }

  deleteInvoice(invNo) {
    
    console.log(invNo);
    
    this.http
    .delete('https://pocket-pills.herokuapp.com/api/customer/orders/' + invNo)
    .subscribe((res) => {
      // this.products = res;
      });
  }

}
