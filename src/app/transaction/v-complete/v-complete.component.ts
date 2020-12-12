import { Component, Input, OnInit } from '@angular/core';
import { TxComplete } from '../models/TxCModel';

@Component({
  selector: 'app-v-complete',
  templateUrl: './v-complete.component.html',
  styleUrls: ['./v-complete.component.css']
})
export class VCompleteComponent implements OnInit {

  @Input() transaction: TxComplete
  date;
  imageUrl:string;
  constructor() { }

  ngOnInit(): void {
    this.imageUrl = ( this.transaction.imageUrl == '' ? 'https://www.raceentry.com/img/Race-Registration-Image-Not-Found.png': this.transaction.imageUrl );
  }

}
