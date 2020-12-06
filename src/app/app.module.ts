import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'
import { FirebaseService} from './services/firebase.service'
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user/user.component';
import { LiPendingComponent } from './transaction/li-pending/li-pending.component';
import { FormsModule } from '@angular/forms';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { AuthGuard } from './services/auth.guard';
import { CreateNewComponent } from './transaction/form/create-new/create-new.component';
import { EditComponent } from './transaction/form/edit/edit.component';
import { TxRoutingModule } from './transaction/form/TxRouting';
import { TxModule } from './transaction/tx.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomeLoggedInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TxModule
  ],
  providers: [FirebaseService, UserService, StorageService, AuthGuard],
  bootstrap: [AppComponent, NavbarComponent, FooterComponent]
})
export class AppModule { }
