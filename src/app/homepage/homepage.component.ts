import { Component, OnInit } from '@angular/core';
import { TxService } from '../transaction/tx.service';
import { map } from 'rxjs/operators'
import { TxComplete } from '../transaction/models/TxCModel';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private txService: TxService) { }
  transactions:TxComplete[]
  ngOnInit(): void {
    this.txService.getCompletedTxs().pipe(map(x => x.slice(0,5))).subscribe(
    (success) => {
      this.transactions = success
    },
    (error) => {
      console.error(error.message);
    })
  }

}
