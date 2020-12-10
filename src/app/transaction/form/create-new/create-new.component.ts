import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TxService } from '../../tx.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css', './../../../GlobalStyles/formStyle.css']
})
export class CreateNewComponent implements OnInit {

  form: FormGroup;
  constructor(private txService: TxService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      imageUrl: ['',[Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      price: ['',[Validators.required, Validators.pattern('[0-9]*([.][0-9]{1,2})?')]],
      description: ['',[]],
    })
  }

  ngOnInit(): void {
  }
  submissionHandler(){
    this.txService.createTx(this.form.value).subscribe(
      (success) => {
        console.log(success)
      },
      (error) => {
        console.error(error.message);
      });
    
  }
}
