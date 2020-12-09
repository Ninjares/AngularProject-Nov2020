import { Injectable } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class TxService {

  constructor(private userService: UserService, private fb:FirebaseService) {

  }

  purchase(itemId:string){
    return this.fb.getTransaction(itemId).pipe(map(ptx => {
      if(this.userService.LoggedUser == ptx.publisherUsername) throw new Error('You can\'t be purchaser and seller of the same item');
      return this.fb.getUser(this.userService.LoggedUser).pipe(map(x => x.USD), map(x => {
        if(x<ptx.price) throw new Error(`You cannot afford this item: Price: $${ptx.price} Balance: $${x}`);
        else{
          this.fb.updateFunds(this.userService.LoggedUser, -ptx.price);
          this.fb.updateFunds(ptx.publisherUsername, ptx.price);
          return this.fb.completeTx({
            title: ptx.title,
            imageUrl: ptx.imageUrl,
            description: ptx.description,
            price: ptx.price,
            buyer: this.userService.LoggedUser,
            seller: ptx.publisherUsername,
            purchasedOn: Date.now()
          }).pipe(map(x => this.fb.deletePending(itemId)));
        }
      }))
    }))
  }

  createTx(value){
    value.publisherUsername = this.userService.LoggedUser;
    value.createdOn = Date.now();
    return this.fb.createTx(value);
  }
  getPendingTx(id){
    return this.fb.getTransaction(id);
  }
  updateTx(id, tx){
    return this.fb.updateTx(id, tx);
  }
  getPendingTxs(){
    return this.fb.getPendingTransactions().pipe(map(x => {
      return this.ObjectToArray(x);
    }));
  }
  getCompletedTxs(){
    return this.fb.getCompletedTxs().pipe(map(x => {
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
