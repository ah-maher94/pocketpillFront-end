import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  styleUrls: ['./add-catagory.component.css']
})
export class AddCatagoryComponent implements OnInit {

  addCategoryReactiveForm: FormGroup;
  departmentNameError;
  categoryImageError: any;
  constructor(private authService: AuthServiceService,
    private profile: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.authService.authUser();
    this.addCategoryReactiveForm = this.profile.group({
      categoryName: ['', [Validators.required]],
      categoryImage: ['', [Validators.required]],
    });
  }
  get registerFormControl() {
    
    return this.addCategoryReactiveForm.controls;
  }
  handleReactiveFormSubmit()
  {
    this.departmentNameError=this.addCategoryReactiveForm.controls.categoryName.errors;
    this.categoryImageError=this.addCategoryReactiveForm.controls.categoryImage.errors;
    
    if(this.departmentNameError ==null)
    {
      const fd =new FormData;
      let branchId = JSON.parse(localStorage.getItem('currentUserBranches'))[0]['branchId'];
      
      // fd.append('image',this.selectedFile,this.selectedFile.name);
      fd.append('categoryImage',this.addCategoryReactiveForm.controls.categoryImage.value);
      fd.append('categoryName',this.addCategoryReactiveForm.controls.categoryName.value);
      this.http.post("https://pocket-pills.herokuapp.com/api/category",fd)
      .subscribe(res =>{
          alert('category added succeffully');
    });
    }
  }

  

}
