import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
//import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'
//import * as firebase from '@angular/fire'

//npm install @angular/fire
@Injectable()
export class FirebaseService {
  firebaseConfig;

  constructor(private http:Http, /*public afAuth: AngularFireAuth*/) {
    this.firebaseConfig = {
      apiKey: "AIzaSyB0hU0PPP1gEAMRKHWVPSZFnAcj2Mixw9E",
      authDomain: "exchange-f0352.firebaseapp.com",
      databaseURL: "https://exchange-f0352.firebaseio.com",
      projectId: "exchange-f0352",
      storageBucket: "exchange-f0352.appspot.com",
      messagingSenderId: "986543905948",
      appId: "1:986543905948:web:4bd96ab5c66bac28c9e159",
      measurementId: "G-T03J2FVSFS"
    };
  }

  register(user){
    this.http.put(`${this.firebaseConfig.databaseURL}/users/${user.username}.json`, JSON.stringify(
      {
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
        BTC: 0.1,
        USD: 1000,
      }
    )).subscribe();
  }
  getUser(username:string):Promise<any>{
    return this.http.get(`${this.firebaseConfig.databaseURL}/users/${username}.json`).toPromise().then(x => x.json());
  }
  getUsers():Promise<any>{
    return this.http.get(`${this.firebaseConfig.databaseURL}/users/.json`).toPromise().then(x => x.json());
  }

  createTransaction(trxData){
    return this.http.post(`${this.firebaseConfig.databaseURL}/pendingTransactions/.json`, JSON.stringify(trxData)).subscribe();
  }


  // registerAuth(value){
  //   return new Promise<any>((resolve, reject) => {
  //     this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err));
  //   })
  // }
}