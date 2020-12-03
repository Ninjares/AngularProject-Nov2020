import { Injectable } from '@angular/core';
import { StringMapWrapper } from '@angular/core/src/facade/collection';
import { AppModule } from './app.module'
import { BrowserStorage } from './storage.service';
import { FirebaseService } from './firebase.service'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  get isLogged() {
    return this.storage.getItem('currentlyLogged') != null;
  }
  get LoggedUser(){
    return this.storage.getItem('currentlyLogged');
  }
  constructor(private storage: BrowserStorage, private firebase: FirebaseService) {
    
  }
  register(value):Promise<any>{
    //password requirements
    //password and repeat password
    //email format
    //phone number format
    return this.userExists(value.username).then(userExists => {
      if(!userExists) {this.firebase.register(value); return true;}
      else throw new Error('User Already Exists');
    }).catch(err => console.error(err.message));
  }

  login(value):Promise<any>{
    return this.userExists(value.username).then(x => {
      if(x){
        return this.firebase.getUser(value.username).then(user => {
          if(value.password == user.password){
            this.storage.setItem('currentlyLogged', value.username);
            console.log('Login Successful');
            return true;
          }
          else throw new Error('Wrong username/password');
        })
      }
      else throw new Error('User doesn\'t exist');
    }).catch(err => console.error(err.message));
  }
  private userExists(username:string){
    return this.firebase.getUser(username).then(user => {
      if(user==null)
      return false; 
      else return true;
    });
  }
  logout():void{
    this.storage.removeItem('currentlyLogged');
  }
}
