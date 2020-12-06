import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.firebaseConfig.databaseURL;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private http: HttpClient) {
  }
  registerUser(userdata){
    return this.http.put<any>(`${apiUrl}/users/${userdata.username}.json`, userdata.username = {
        email: userdata.email,
        phoneNumber: userdata.phoneNumber,
        password: userdata.password,
        BTC: 0.1,
        USD: 1000,
    });
  }
  getUser(username:string):Observable<any>{
    return this.http.get<any>(`${apiUrl}/users/${username}.json`)
  }
  getPendingTransactions():Observable<[]>{
    return this.http.get<[]>(`${apiUrl}/pendingTransactions/.json`);
  }
  createTx(txData){
    return this.http.post<any>(`${apiUrl}/pendingTransactions/.json`, txData);
  }
}
