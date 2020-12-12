import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserService } from '../services/user.service';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutingModule } from './userRouting'
import { TxModule } from '../transaction/tx.module';
import { SingleFormComponent } from './single-form/single-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SingleFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    userRoutingModule,
    TxModule
  ],
  providers:[
    UserService, FirebaseService
  ]
})
export class UserModule { }
