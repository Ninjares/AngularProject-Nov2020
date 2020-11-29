import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserStorage } from './storage.service';
import { ImportResolver } from '@angular/compiler';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule //router goes here
  ],
  providers: [UserService, BrowserStorage], //services
  bootstrap: [AppComponent, AppNavbarComponent, FooterComponent] //cross page components
})
export class AppModule { }
