import { transition } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { transcode } from 'buffer';
import { UserService } from 'src/app/services/user.service';
import { TxModel } from '../models/TxModel';
import { TxService } from '../tx.service';

@Component({
  selector: 'app-v-pending',
  templateUrl: './v-pending.component.html',
  styleUrls: ['./v-pending.component.css']
})
export class VPendingComponent implements OnInit {

  @Input() transaction: TxModel;
  imageUrl:string;
  @Output() refresh = new EventEmitter();
  constructor(private userService: UserService, private txService: TxService, private router:Router) {

   }
  LoggedUser = this.userService.LoggedUser;
  isLogged:boolean = this.userService.isLogged;
  showDeletionQuery: boolean = false;
  showDeletion(){
    this.showDeletionQuery = !this.showDeletionQuery;
  }

  ngOnInit(): void {
    this.imageUrl = ( this.transaction.imageUrl == '' ? 'https://www.raceentry.com/img/Race-Registration-Image-Not-Found.png': this.transaction.imageUrl )
  }
  deletionHandler(){
     this.txService.deleteTx(this.transaction.id).subscribe((success) => {
       this.refresh.emit();
     },
     (error) => {
       console.error(error.message);
     })
  }

}
