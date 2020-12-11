import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../GlobalStyles/formStyle.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string = "N/A";
  showErrorMessage:boolean = false;

  showLoadingMessage: boolean = false;

  showSuccessMessage: boolean = false;
  successMessage: string = "Success";

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }
  loginHandler(value){
    this.userService.login(value.username, value.password).subscribe(
      (success) => { 
        console.log("Login Successful");
        this.successMessage = "Login Successful!";
        this.showLoadingMessage = false;
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.router.navigate([''])
          this.showSuccessMessage = false;
        },500);
      },
      (error) => { 
        this.showErrorMessage = true;
        this.errorMessage = error.message
        console.error(error.message);
        setTimeout(() => {
          this.showErrorMessage = false;
        },3000);
      }
    );
  }
}
