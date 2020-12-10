import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { transcode } from 'buffer';
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
  form:FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private txService: TxService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      imageUrl: ['', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      price: ['', [Validators.required, Validators.pattern('[0-9]*([.][0-9]{1,2})?')]],
      description: ['' ,[]],
    })
  }

  ngOnInit(): void {
    this.txService.getPendingTx(this.itemId).subscribe(
      (success) => {
        this.transaction = success;
        this.form.setValue({
          title: this.transaction.title,
          imageUrl: this.transaction.imageUrl ,
          price: this.transaction.price,
          description: this.transaction.description
        });
        console.log(success);
      },
      (error) => {
        console.error(error.message)
      }
    );
  }
  submissionHandler(){
    this.form.value['publisherUsername'] = this.transaction.publisherUsername;
    this.form.value['createdOn'] = this.transaction.createdOn; 
    this.txService.updateTx(this.itemId, this.form.value).subscribe(
      (success) => {
        console.log(success);
      },(error) => { 
        console.error(error.message)
      });
    }
  
}
