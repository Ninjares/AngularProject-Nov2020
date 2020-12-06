import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../GlobalStyles/formStyle.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }
  loginHandler(value){
    this.userService.login(value.username, value.password).subscribe(
      (success) => { 
        console.log("Login Successful");
        this.router.navigate(['']);
      },
      (error) => { 
        console.error(error.message);
      }
    );
  }
}
