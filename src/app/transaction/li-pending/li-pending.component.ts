import { Component, Input, OnInit } from '@angular/core';
import { TxModel } from '../models/TxModel';

@Component({
  selector: 'app-li-pending',
  templateUrl: './li-pending.component.html',
  styleUrls: ['./li-pending.component.css']
})
export class LiPendingComponent implements OnInit {

  constructor() { }
  @Input() transaction: TxModel;
  ngOnInit(): void {
  }

}
