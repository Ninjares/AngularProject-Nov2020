import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { TxService } from '../transaction/tx.service';
import { map } from 'rxjs/operators';
import { SrvRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class UserpageService {

  
  constructor(private tx: TxService) { 

  }
  getOpenTxs(userId){
    return this.tx.getPendingTxs().pipe(map(arr => arr.filter(x => x.publisherUsername == userId)));
  }
  getCompletedTxs(userId){
    return this.tx.getCompletedTxs().pipe(map(arr => arr.filter(x => x.buyer == userId || x.seller == userId)))
  }
}
