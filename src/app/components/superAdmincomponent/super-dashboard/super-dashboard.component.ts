import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-super-dashboard',
  templateUrl: './super-dashboard.component.html',
  styleUrls: ['./super-dashboard.component.css']
})
export class SuperDashboardComponent implements OnInit {
  orders: any;

  constructor(private http: HttpClient,
    private authService: AuthServiceService) { }

    async ngOnInit(): Promise<void> {
      this.authService.authUser();
      try {
      
     await this.http.get("https://pocket-pills.herokuapp.com/api/getBranchinfo").subscribe(res=>{
       this.orders=res;
       console.log(res);
     });

   

    } catch (error) {
      
    }
  }

}
