import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { transcode } from 'buffer';
import { TxModel } from '../../models/TxModel';
import { TxService } from '../../tx.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css', './../../../GlobalStyles/formStyle.css']
})
export class EditComponent implements OnInit {

  errorMessage:string = "N/A";
  showErrorMessage:boolean = false;

  showLoadingMessage: boolean = false;

  showSuccessMessage: boolean = false;
  successMessage: string = "Success";

  itemId:string = this.activatedRoute.snapshot.params.id;
  transaction:TxModel;
  form:FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private txService: TxService, private formBuilder: FormBuilder, private router: Router) { 
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
      },
      (error) => {
        this.errorMessage = error.message;
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        },3000);
      }
    );
  }
  submissionHandler(){
    this.showLoadingMessage = true;
    this.form.value['publisherUsername'] = this.transaction.publisherUsername;
    this.form.value['createdOn'] = this.transaction.createdOn; 
    this.txService.updateTx(this.itemId, this.form.value).subscribe(
      (success) => {
        this.successMessage = "Update successful!";
        this.showLoadingMessage = false;
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
          this.router.navigate(['market']);
        },500);
      },(error) => { 
        this.errorMessage = error.message;
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        },3000)
      });
    }
  
}
