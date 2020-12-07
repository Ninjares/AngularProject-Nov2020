import { Component, Input, OnInit } from '@angular/core';
import { TxComplete } from '../models/TxCModel';

@Component({
  selector: 'app-li-complete',
  templateUrl: './li-complete.component.html',
  styleUrls: ['./li-complete.component.css']
})
export class LiCompleteComponent implements OnInit {

  viewDetails:boolean = false;
  @Input() transaction: TxComplete;
  constructor() { }
  ngOnInit(): void {
  }
  
  toggleDetails(){
    this.viewDetails = !this.viewDetails;
  }

}
