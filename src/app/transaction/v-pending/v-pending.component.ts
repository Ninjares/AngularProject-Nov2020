import { Component, Input, OnInit } from '@angular/core';
import { transcode } from 'buffer';
import { UserService } from 'src/app/services/user.service';
import { TxModel } from '../models/TxModel';

@Component({
  selector: 'app-v-pending',
  templateUrl: './v-pending.component.html',
  styleUrls: ['./v-pending.component.css']
})
export class VPendingComponent implements OnInit {

  @Input() transaction: TxModel;
  imageUrl:string;
  constructor(private userService: UserService) { }
  LoggedUser = this.userService.LoggedUser;
  isLogged:boolean = this.userService.isLogged;
  ngOnInit(): void {
    this.imageUrl = ( this.transaction.imageUrl == '' ? 'https://www.raceentry.com/img/Race-Registration-Image-Not-Found.png': this.transaction.imageUrl )
  }
  deletionHandler(){
    console.log('delete')
  }

}
