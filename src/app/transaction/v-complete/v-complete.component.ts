import { Component, Input, OnInit } from '@angular/core';
import { TxComplete } from '../models/TxCModel';

@Component({
  selector: 'app-v-complete',
  templateUrl: './v-complete.component.html',
  styleUrls: ['./v-complete.component.css']
})
export class VCompleteComponent implements OnInit {

  @Input() transaction: TxComplete
  constructor() { }

  ngOnInit(): void {
  }

}
