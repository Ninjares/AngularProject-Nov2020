import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  atUserPage: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.atUserPage = /\/user\/([\w\/]*)/.test(this.router.url);
  }
  refresh(){
    this.refreshpage.emit();
  }
  toggleDetails(){
    this.viewDetails = !this.viewDetails;
  }

}
