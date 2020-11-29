import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService) { }
  registrationHandler(formValue: { username: string, email:string, password: string, repeatPassword: string}):void{
    
    this.userService.register(formValue.username, formValue.email, formValue.password, formValue.repeatPassword);
  }
  ngOnInit() {
  }

}
