import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TxModel } from '../models/TxModel';

@Component({
  selector: 'app-li-pending',
  templateUrl: './li-pending.component.html',
  styleUrls: ['./li-pending.component.css']
})
export class LiPendingComponent implements OnInit {

  viewDetails:boolean = false;
  @Input() transaction: TxModel;
  @Output() refreshpage = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  refresh(){
    this.refreshpage.emit();
  }
  toggleDetails(){
    this.viewDetails = !this.viewDetails;
  }

}
