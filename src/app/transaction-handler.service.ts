import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { UserService } from './user.service';

@Injectable()
export class TransactionHandlerService {

  constructor(private firebase: FirebaseService, private userManager: UserService) { 

  }

  createTransaction(trx){
    trx.price = Number(trx.price);
    trx.publisherUsername = this.userManager.LoggedUser;
    console.log(trx);
    this.firebase.createTransaction(trx);
  }

  editTransaction(trx){

  }
  getTransaction(id){

  }

}
