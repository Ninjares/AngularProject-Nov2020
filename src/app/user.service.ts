import { Injectable } from '@angular/core';
import { StringMapWrapper } from '@angular/core/src/facade/collection';
import { AppModule } from './app.module'
import { BrowserStorage } from './storage.service';

@Injectable()
export class UserService {

  get isLogged() {
    return this.storage.getItem('currentlyLogged') != null;
  }
  get LoggedUser(){
    return this.storage.getItem('currentlyLogged');
  }
  constructor(private storage: BrowserStorage) { }
  register(username: string, email: string, password: string, passwordRepeat: string):void{
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(passwordRepeat);

  }
  login(username: string, password:string):void{
    console.log(username);
    console.log(password);
    this.storage.setItem('currentlyLogged', username);
  }
  logout():void{
    this.storage.removeItem('currentlyLogged');
  }
}
