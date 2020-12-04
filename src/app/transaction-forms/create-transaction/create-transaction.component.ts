import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  constructor() { }

  //Title
  //Picture
  //Description
  //Price USD for now BTC later
  ngOnInit() {
  }
  submissionHandler(formValue){
    console.log(formValue);
  }
}
