import { Component, OnInit } from '@angular/core';
import { TransactionHandlerService } from 'app/transaction-handler.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  constructor(public transactionhandler: TransactionHandlerService) { }

  //Title
  //Picture
  //Description
  //Price USD for now BTC later
  ngOnInit() {
  }
  submissionHandler(formValue){
    this.transactionhandler.createTransaction(formValue);
  }
}
