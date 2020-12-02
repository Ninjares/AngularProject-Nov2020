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
import { FirebaseService } from './firebase.service';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment';
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

   // AngularFireModule.initializeApp(environment.firebase),
   // AngularFirestoreModule,
   // AngularFireAuthModule,
    AppRoutingModule //router goes here
  ],
  providers: [UserService, BrowserStorage, FirebaseService], //services
  bootstrap: [AppComponent, AppNavbarComponent, FooterComponent] //cross page components
})
export class AppModule { }
