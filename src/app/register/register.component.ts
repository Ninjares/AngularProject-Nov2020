import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { 

  }
  registrationHandler(formValue: { username: string, email:string, phoneNumber: string, password: string, repeatPassword: string}):void{
    this.userService.register(formValue).then(x =>{
      console.log(x);
      if(x) this.router.navigate(['login']);
    });
  }
  // authRegister(value){
  //   this.userService.registerAuth(value);
  // }
  ngOnInit() {
  }

}
