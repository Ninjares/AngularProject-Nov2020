import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TxService } from '../tx.service';

@Component({
  selector: 'app-tx-complete',
  templateUrl: './tx-complete.component.html',
  styleUrls: ['./tx-complete.component.css']
})
export class TxCompleteComponent implements OnInit {

  itemId:string = this.activatedRoute.snapshot.params.id;

  constructor(private activatedRoute: ActivatedRoute, private txService: TxService) {

  }
  


  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    this.txService.getPendingTx(this.activatedRoute.snapshot.params.id).subscribe(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error.message);
      })
  }

  purchase(){
    this.txService.purchase(this.itemId).subscribe(
    (userPass) => {
      userPass.subscribe(
      (fundPass) => { 
        fundPass.subscribe(
          (txCreated) => {
            txCreated.subscribe(
              (pendingDeleted) => {
                console.log('Success');
              },
              (error) => {
                console.error(error.message);
              })
          },
          (error) => {
            console.error(error.message);
          })
      }, 
      (error) => {
        console.error(error.message);
      });
    },
    (error) => {
      console.error(error.message);
    });
  }

}
