import { Component } from '@angular/core';
import { DataService } from './data/data.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-app';
  adminRoute;
  UserRoute;

  constructor(private getUser: DataService,private getAdmin: DataService){}
  ngOnInit()
  {
    this.getUser.loginUserTrigger.subscribe(result => {
      this.UserRoute = result;})
    this.getAdmin.loginAdminTrigger.subscribe(result => {
      this.adminRoute = result;})
  }
}
