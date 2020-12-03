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
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LiPendingTransactionComponent } from './transaction-components/li-pending-transaction/li-pending-transaction.component';
import { LiCompletedTransactionComponent } from './transaction-components/li-completed-transaction/li-completed-transaction.component';
import { VPendingTransactionComponent } from './transaction-components/v-pending-transaction/v-pending-transaction.component';
import { VCompletedTransactionComponent } from './transaction-components/v-completed-transaction/v-completed-transaction.component';
import { CreateTransactionComponent } from './transaction-forms/create-transaction/create-transaction.component';
import { EngageTransactionComponent } from './transaction-forms/engage-transaction/engage-transaction.component';
import { UserPageComponent } from './user-page/user-page.component';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeLoggedInComponent,
    HomepageComponent,
    LiPendingTransactionComponent,
    LiCompletedTransactionComponent,
    VPendingTransactionComponent,
    VCompletedTransactionComponent,
    CreateTransactionComponent,
    EngageTransactionComponent,
    UserPageComponent
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
