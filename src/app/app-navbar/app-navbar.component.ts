import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit 
{

  constructor(public userService: UserService) {

  }
  get isLogged():boolean{
    return this.userService.isLogged;
  }
  get Username(){
    return this.userService.LoggedUser;
  }
  logoutHandler():void{
    console.log('logout');
    this.userService.logout();
  }
  
  ngOnInit() { }

}
