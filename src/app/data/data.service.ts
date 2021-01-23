import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource=new BehaviorSubject('default message');
  currentMessage=this.messageSource.asObservable();
  private loginAdmin=new BehaviorSubject(0);
  private loginUser=new BehaviorSubject(0);

  loginAdminTrigger=this.loginAdmin.asObservable();
  loginUserTrigger=this.loginUser.asObservable();

  constructor() { }
  changeMessage(message: string)
  {
    this.messageSource.next(message);
  }
  changeAdmin(Admin: number)
  {
    this.loginAdmin.next(Admin);
  }
  changeUser(User: number)
  {
    this.loginUser.next(User);
  }
}
