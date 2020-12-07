import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { TxService } from '../transaction/tx.service';
import { map } from 'rxjs/operators';
import { SrvRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class UserpageService {

  
  constructor(private userService: UserService, private tx: TxService) { 

  }
  getOpenTxs(){
    return this.tx.getPendingTxs().pipe(map(arr => arr.filter(x => x.publisherUsername == this.userService.LoggedUser)));
  }
  getCompletedTxs(){
    return this.tx.getCompletedTxs().pipe(map(arr => arr.filter(x => x.buyer == this.userService.LoggedUser || x.seller == this.userService.LoggedUser)))
  }
}
