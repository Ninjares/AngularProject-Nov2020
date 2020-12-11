import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'market', //find a way to loggedinHome without the logged path
        component: HomeLoggedInComponent,
      },
      {
        path:'tx',
        loadChildren: () => import('./transaction/tx.module').then(m => m.TxModule)
      },
      {
        path:'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: '**',
        component: E404Component
      }
    ]

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
