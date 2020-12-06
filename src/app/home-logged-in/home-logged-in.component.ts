import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { TxModel } from '../transaction/models/TxModel';
import { TxService } from '../transaction/tx.service';

@Component({
  selector: 'app-home-logged-in',
  templateUrl: './home-logged-in.component.html',
  styleUrls: ['./home-logged-in.component.css']
})
export class HomeLoggedInComponent implements OnInit {

  transactions: TxModel[];
  constructor(private txService: TxService) { }
  
  ngOnInit(): void {
    this.txService.getPendingTxs().subscribe(
      (success) => {
        this.transactions = success;
        console.log(this.transactions);
      },
      (error) => {
        console.error(error.message)
      });
  }

}
