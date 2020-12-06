import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { StorageService } from './storage.service';
import { tap , map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get isLogged() {
    return this.storage.getItem('currentlyLogged') != null;
  }
  get LoggedUser(){
    return this.storage.getItem('currentlyLogged');
  }
  constructor(private storage: StorageService, private fb: FirebaseService) {

  }
  register(userData):Observable<any>{
    return this.fb.getUser(userData.username).pipe(map(user => {
      if(user!=null) throw new Error('User already exists');
      //add various other checks
      else return this.fb.registerUser(userData)
    }))

  }
  login(username:string, password:string):Observable<any>{
    return this.fb.getUser(username).pipe(map(user => {
      if(user==null) throw new Error('User doesn\'t exist');
      else if(user.password != password) throw new Error('Wrong password');
      else{
        this.storage.setItem('currentlyLogged', username);
      }
    }))
  }
  logout(){
    this.storage.removeItem('currentlyLogged');
  }




  
  private userExists(username:string){
    return this.fb.getUser(username).pipe(
      map((x) =>  x!=null), tap(x => console.log(x))
    )
  } // this is just here as a template, tap returns the original value
}
