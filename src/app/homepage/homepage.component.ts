import { Component, OnInit } from '@angular/core';
import { TxService } from '../transaction/tx.service';
import { map } from 'rxjs/operators'
import { TxComplete } from '../transaction/models/TxCModel';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private txService: TxService, public userService:UserService) { }
  transactions:TxComplete[]
  ngOnInit(): void {
    this.txService.getCompletedTxs().pipe(map(x => x.slice(0,5))).subscribe(
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
      console.error(error.message);
    })
  }

}
