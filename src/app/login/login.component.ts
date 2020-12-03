import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {

  }
  loginHandler(formValue: { username: string, password:string}):void{
    this.userService.login(formValue)
    .then(x => {
      console.log(x);
      if(x) this.router.navigate(['']);
    });
  }

}
