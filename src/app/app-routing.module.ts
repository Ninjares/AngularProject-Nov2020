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
    canActivate: [AuthGuard],
    data: {
      isLogged: false,
      redirectTo: 'logged'
    }
  },
  {
    path:'user', //you can also use can activateChild
    children: [
      {
        path: 'login',
        component: LoginComponent, //your component here
        canActivate: [AuthGuard],
        data:{
          isLogged: false,
          redirectTo: ''
        }
      },
      {
        path: 'register',
        component: RegisterComponent, //your component here
        canActivate: [AuthGuard],
        data:{
          isLogged: false,
          redirectTo: ''
        } 
      }
    ]
  },
  {
    path: 'logged', //find a way to loggedinHome without the logged path
    pathMatch: 'full',
    component: HomeLoggedInComponent,
    canActivate: [AuthGuard],
    data:{
      isLogged: true, 
      redirectTo: ''
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
