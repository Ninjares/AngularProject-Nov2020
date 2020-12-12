import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';
import { TxComplete } from 'src/app/transaction/models/TxCModel';
import { TxModel } from 'src/app/transaction/models/TxModel';
import { UserpageService } from '../userpage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userpage: UserpageService, private activatedRoute: ActivatedRoute, public userService: UserService, private fb: FirebaseService) { }


  pendingTxs: TxModel[];
  completeTxs: TxComplete[];
  user;
  profilePic: string;

  ngOnInit(): void {
    this.userpage.getOpenTxs(this.activatedRoute.snapshot.params.id).subscribe((success) => {
      this.pendingTxs = success;
      for(let i=0; i<this.pendingTxs.length; i++){
        this.pendingTxs[i].odd = i%2==0;
        this.pendingTxs[i].pos = 0;
      }
      this.pendingTxs[0].pos = 1;
      this.pendingTxs[this.pendingTxs.length-1].pos = -1;
    },
    (error) => {
      console.error(error.message);
    });
    this.userpage.getCompletedTxs(this.activatedRoute.snapshot.params.id).subscribe((success) => {
      this.completeTxs = success;
      for(let i=0; i<this.completeTxs.length; i++){
        this.completeTxs[i].odd = i%2==0;
        this.completeTxs[i].pos = 0;
      }
      this.completeTxs[0].pos = 1;
      this.completeTxs[this.completeTxs.length-1].pos = -1;
    },
    (error) => {
      console.error(error.message);
    })
    this.loadUser();
  }

  private loadUser(){
    this.userService.getUser(this.activatedRoute.snapshot.params.id).subscribe((success) => {
      this.user = success;
      this.profilePic = (this.user.profilePicUrl == '' ? 'https://www.raceentry.com/img/Race-Registration-Image-Not-Found.png' : this.user.profilePicUrl);
    },
    (error) => {
      console.error(error.message);
    })
  }

  showPhoneForm: boolean = false;
  phoneValidator = [Validators.required, Validators.pattern('[+]?[0-9]*')]
  togglePhoneForm(){
    this.showPhoneForm = !this.showPhoneForm
  }
  phoneFormSubmit(value){
    console.log(value);
    this.fb.updatePhone(this.user.username, `${value}`).subscribe((success)=>{
      this.loadUser();
      this.togglePhoneForm();
    },
    (error)=>{
      console.error(error.message);
    })
  }

  showEmailForm: boolean = false;
  emailValidator = [Validators.required, Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}')];
  toggleEmailForm(){
    this.showEmailForm = !this.showEmailForm
  }
  emailFormSubmit(value){
    this.fb.updateEmail(this.user.username, value).subscribe((success)=>{
      this.loadUser();
      this.toggleEmailForm();
    },
    (error)=>{
      console.error(error.message);
    })
  }

  DorW:number = 0;
  showFundsForm: boolean = false;
  fundsValidator = [Validators.required, Validators.pattern('[0-9]*([.][0-9]{1,2})?')]
  toggleFundsForm(){
    this.showFundsForm = !this.showFundsForm
  }
  fundsFormSubmit(value){
    if(this.DorW==1) this.fb.updateFunds(this.user.username, value);
    if(this.DorW==-1) this.fb.updateFunds(this.user.username, -value);
    setTimeout(() =>{
      this.loadUser();
      this.toggleFundsForm();
    },800)
  }
}
