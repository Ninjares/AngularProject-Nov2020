import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emit } from 'process';
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
    return this.http.put<any>(`/users/${userdata.username}.json`, userdata.username = {
        email: userdata.email,
        phoneNumber: userdata.phoneNumber,
        password: userdata.password,
        USD: 1000,
        profilePicUrl: userdata.profilePicUrl
    });
  }
  getUser(username):Observable<any>{
    return this.http.get<any>(`/users/${username}.json`)
  }
  getPendingTransactions():Observable<[]>{
    return this.http.get<[]>(`/pendingTransactions/.json`);
  }
  getTransaction(id){
    return this.http.get<any>(`/pendingTransactions/${id}.json`);
  }
  createTx(txData){
    return this.http.post<any>(`/pendingTransactions/.json`, txData);
  }
  updateTx(id, data){
    return this.http.put(`/pendingTransactions/${id}.json`, data);
  }
  completeTx(txData){
    return this.http.post(`/completedTransactions/.json`, txData);
  }
  deletePending(id){
    return this.http.delete(`/pendingTransactions/${id}.json`);
  }
  getCompletedTxs(){
    return this.http.get<[]>(`/completedTransactions/.json`);
  }
  updatePhone(id, phone){
    return this.http.put<string>(`/users/${id}/phoneNumber.json`, `"${phone}"`);
  }
  updateEmail(id, email){
    return this.http.put<string>(`/users/${id}/email.json`, `"${email}"`);
  }



  updateFunds(username, sum){
    this.http.get<any>(`/users/${username}/USD.json`).subscribe(x => {
      this.http.put<any>(`/users/${username}/USD.json`, Number(x)+Number(sum)).subscribe();
    });
  }
}
