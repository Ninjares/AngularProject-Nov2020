import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent, //your component here
    // canActivate: [AuthGuard],
    // data: {
    //   isLogged: false,
    //   redirectTo: 'logged'
    // }
  },
  
  {
    path: 'market', //find a way to loggedinHome without the logged path
    pathMatch: 'full',
    component: HomeLoggedInComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
