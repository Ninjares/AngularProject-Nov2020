import { transition } from '@angular/animations';
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
        for(let i=0; i<this.transactions.length; i++){
          this.transactions[i].odd = i%2==0;
          this.transactions[i].pos = 0;
        }
        this.transactions[0].pos = 1;
        this.transactions[this.transactions.length-1].pos = -1;
      },
      (error) => {
        console.error(error.message)
      });
  }

}
