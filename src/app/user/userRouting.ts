import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [AuthGuard],
                data:{
                  isLogged: false,
                  redirectTo: ''
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [AuthGuard],
                data:{
                  isLogged: false,
                  redirectTo: ''
                }
            },
            {
                path: ':id',
                component: UserComponent
            }
        ]
    },
]
export const userRoutingModule = RouterModule.forChild(routes);