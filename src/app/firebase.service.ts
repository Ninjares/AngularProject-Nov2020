import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FirebaseService {
 firebaseConfig;

  constructor(private http:Http) {
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
  test():void{
    console.log('fb');
    this.http.get (`${this.firebaseConfig.databaseURL}/tests/1.json`).subscribe(x => console.log(x.json()));
    this.http.post(`${this.firebaseConfig.databaseURL}/tests/.json`, JSON.stringify(['a',2,true])).subscribe();
  }
}