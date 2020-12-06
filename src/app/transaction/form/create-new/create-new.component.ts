import { Component, OnInit } from '@angular/core';
import { TxService } from '../../tx.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css', './../../../GlobalStyles/formStyle.css']
})
export class CreateNewComponent implements OnInit {

  constructor(private txService: TxService) { }

  ngOnInit(): void {
  }
  submissionHandler(data){
    this.txService.createTx(data).subscribe(
      (success) => {
        console.log(success)
      },
      (error) => {
        console.error(error.message);
      });
    
  }
}
