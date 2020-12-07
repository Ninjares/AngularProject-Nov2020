import { Component, OnInit } from '@angular/core';
import { TxComplete } from 'src/app/transaction/models/TxCModel';
import { TxModel } from 'src/app/transaction/models/TxModel';
import { UserpageService } from '../userpage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userpage: UserpageService) { }
  pendingTxs: TxModel[];
  completeTxs: TxComplete[]
  ngOnInit(): void {
    this.userpage.getOpenTxs().subscribe((success) => {
      this.pendingTxs = success;
      console.log(success);
    },
    (error) => {
      console.error(error.message);
    });
    this.userpage.getCompletedTxs().subscribe((success) => {
      this.completeTxs = success;
      console.log(success)
    },
    (error) => {
      console.error(error.message);
    })
  }

}
