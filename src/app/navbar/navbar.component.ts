import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService:UserService, private router: Router) { 

  }
  get isLogged():boolean{
    return this.userService.isLogged;
  }
  get Username(){
    return this.userService.LoggedUser;
  }
  logoutHandler():void{
    this.userService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
