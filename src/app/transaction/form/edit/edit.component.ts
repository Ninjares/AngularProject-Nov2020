import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TxModel } from '../../models/TxModel';
import { TxService } from '../../tx.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css', './../../../GlobalStyles/formStyle.css']
})
export class EditComponent implements OnInit {

  itemId:string = this.activatedRoute.snapshot.params.id;
  transaction:TxModel;
  constructor(private activatedRoute: ActivatedRoute, private txService: TxService) { }

  ngOnInit(): void {
    this.txService.getPendingTx(this.itemId).subscribe(
      (success) => {
        this.transaction = success;
        console.log(success);
      },
      (error) => {
        console.error(error.message)
      }
    );
  }

  submissionHandler(data){
    data.publisherUsername = this.transaction.publisherUsername;
    data.createdOn = this.transaction.createdOn;
    this.txService.updateTx(this.itemId, data).subscribe(
      (success) => {
        console.log(success);
      },(error) => { 
        console.error(error.message)
      });
    }
  
}
