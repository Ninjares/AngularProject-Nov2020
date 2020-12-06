import { Injectable } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TxService {

  constructor(private userService: UserService, private fb:FirebaseService) {

  }

  createTx(value){
    value.publisherUsername = this.userService.LoggedUser;
    return this.fb.createTx(value);
  }
  getPendingTxs(){
    return this.fb.getPendingTransactions().pipe(map(x => {
      return this.ObjectToArray(x);
    }));
  }

  private ObjectToArray(obj){
    return Object.keys(obj).reduce((arr, currId) => {
      const data = obj[currId];
      return arr.concat({id:currId, ...data});
    }, []);
  }
}
