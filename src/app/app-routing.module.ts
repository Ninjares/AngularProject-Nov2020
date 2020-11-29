import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FooterComponent //your component here
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent //your component here
    },
    {
        path: 'register',
        pathMatch: 'full',
        component: RegisterComponent //your component here
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);