import { Component, Input, OnInit } from '@angular/core';
import { TxModel } from '../models/TxModel';

@Component({
  selector: 'app-v-pending',
  templateUrl: './v-pending.component.html',
  styleUrls: ['./v-pending.component.css']
})
export class VPendingComponent implements OnInit {

  @Input() transaction: TxModel;
  constructor() { }

  ngOnInit(): void {
  }
  deletionHandler(){
    console.log('delete')
  }

}
