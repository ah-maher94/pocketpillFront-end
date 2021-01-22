import { Component, OnInit  } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  styleUrls: ['./add-catagory.component.css']
})
export class AddCatagoryComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.authUser();
    // async ngOnInit(): Promise<void> {
      // try {
      
    //  await this.http.get("http://127.0.0.1:8000/category").subscribe(res=>{
    //   //  this.categoryList=res;
    //  });

    // } catch (error) {
      
    // }
  
  }

  

}
