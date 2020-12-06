import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../GlobalStyles/formStyle.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    
  }
  registrationHandler(value){
    this.userService.register(value).subscribe(
      (success) => { 
        console.log("Username is free");
        success.subscribe((success) => {
          console.log('Registration Successful');
          console.log(success);
          this.router.navigate(['user/login'])
        },
        (error)=> {
          console.error(error.message);
        })
      },
      (error) => { 
        console.error(error.message);
      }
    );
  }

}
