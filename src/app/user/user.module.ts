import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserService } from '../services/user.service';
import { FirebaseService } from '../services/firebase.service';
import { FormsModule } from '@angular/forms';
import { userRoutingModule } from './userRouting'
import { TxModule } from '../transaction/tx.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    userRoutingModule,
    TxModule
  ],
  providers:[
    UserService, FirebaseService
  ]
})
export class UserModule { }
