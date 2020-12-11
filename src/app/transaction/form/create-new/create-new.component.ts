import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TxService } from '../../tx.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css', './../../../GlobalStyles/formStyle.css']
})
export class CreateNewComponent implements OnInit {

  errorMessage:string = "N/A";
  showErrorMessage:boolean = false;

  showLoadingMessage: boolean = false;

  showSuccessMessage: boolean = false;
  successMessage: string = "Success";

  form: FormGroup;
  constructor(private txService: TxService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      imageUrl: ['',[Validators.pattern('(https?:\/\/)?([\\da-z.-]+)\/([\/a-zA-Z0-9%-.]*)')]],
      price: ['',[Validators.required, Validators.pattern('[0-9]*([.][0-9]{1,2})?')]],
      description: ['',[]],
    })
  }

  ngOnInit(): void {
  }
  submissionHandler(){
    this.showLoadingMessage = true;
    this.txService.createTx(this.form.value).subscribe(
      (success) => {
        this.successMessage = "Transaction created!";
        this.showLoadingMessage = false;
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
          this.router.navigate(['market']);
        },500);
      },
      (error) => {
        this.errorMessage = error.message;
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        },3000)
      });
    
  }
}
