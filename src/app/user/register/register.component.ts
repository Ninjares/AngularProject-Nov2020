import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { rePasswordValidatorFactory } from 'src/app/services/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../GlobalStyles/formStyle.css']
})
export class RegisterComponent implements OnInit {

  errorMessage:string = "N/A";
  showErrorMessage:boolean = false;

  showLoadingMessage: boolean = false;

  showSuccessMessage: boolean = false;
  successMessage: string = "Success";

  form: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb:FormBuilder) { 
     const passwordControl = this.fb.control('', [Validators.required, Validators.minLength(6)]);
     this.form = this.fb.group({
       username: ['', [Validators.required, Validators.minLength(4)]],
       email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}')]],
       phoneNumber: ['',[Validators.required, Validators.pattern('[+]?[0-9]*')]],
       password: passwordControl,
       repeatPassword: ['',[rePasswordValidatorFactory(passwordControl)]] //don't forget that this returns a validator
     })
   }
  ngOnInit(): void {
    
  }



  registrationHandle(){
   console.log(this.form.value);
  }
  registrationHandler(){
    this.showLoadingMessage = true;
    this.userService.register(this.form.value).subscribe(
      (success) => { 
        console.log("Username is free");
        success.subscribe((success) => {
          this.successMessage = "Registration Successful!";
          this.showLoadingMessage = false;
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.router.navigate(['user/login'])
            this.showSuccessMessage = false;
          },500);
        },
        (error)=> {
          this.showLoadingMessage = false;
          this.displayErrorMessage(error.message);
        })
      },
      (error) => { 
        this.showLoadingMessage = false;
        this.displayErrorMessage(error.message);
      }
    );
  }
  private displayErrorMessage(msg):void{
    this.showErrorMessage = true;
    this.errorMessage = msg;
    console.error(msg);
    setTimeout(() => {
      this.showErrorMessage = false;
    },3000);
  }

}
