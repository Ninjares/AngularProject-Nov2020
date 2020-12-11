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
        USD: 1000,
        profilePicUrl: userdata.profilePicUrl
    });
  }
  getUser(username):Observable<any>{
    return this.http.get<any>(`${apiUrl}/users/${username}.json`)
  }
  getPendingTransactions():Observable<[]>{
    return this.http.get<[]>(`${apiUrl}/pendingTransactions/.json`);
  }
  getTransaction(id){
    return this.http.get<any>(`${apiUrl}/pendingTransactions/${id}.json`);
  }
  createTx(txData){
    return this.http.post<any>(`${apiUrl}/pendingTransactions/.json`, txData);
  }
  updateTx(id, data){
    return this.http.put(`${apiUrl}/pendingTransactions/${id}.json`, data);
  }
  completeTx(txData){
    return this.http.post(`${apiUrl}/completedTransactions/.json`, txData);
  }
  deletePending(id){
    return this.http.delete(`${apiUrl}/pendingTransactions/${id}.json`);
  }
  getCompletedTxs(){
    return this.http.get<[]>(`${apiUrl}/completedTransactions/.json`);
  }


  updateFunds(username, sum){
    this.http.get<any>(`${apiUrl}/users/${username}/USD.json`).subscribe(x => {
      this.http.put<any>(`${apiUrl}/users/${username}/USD.json`, Number(x)+Number(sum)).subscribe();
    });
  }
}
