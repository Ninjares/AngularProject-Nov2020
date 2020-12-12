import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TxComplete } from '../models/TxCModel';

@Component({
  selector: 'app-li-complete',
  templateUrl: './li-complete.component.html',
  styleUrls: ['./li-complete.component.css']
})
export class LiCompleteComponent implements OnInit {

  viewDetails:boolean = false;
  @Input() transaction: TxComplete;
  atUserPage: boolean = false;
  merchantField:string;
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.atUserPage = /\/user\/([\w\/]*)/.test(this.router.url);
    if(this.atUserPage) {
      let user = /\/user\/([\w\/]*)/.exec(this.router.url)[1];
      if(this.transaction.buyer==user) this.merchantField=this.transaction.seller;
      else this.merchantField = this.transaction.buyer;
    }
  }
  
  toggleDetails(){
    this.viewDetails = !this.viewDetails;
  }

}
