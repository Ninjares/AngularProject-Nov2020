import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.css']
})
export class SingleFormComponent implements OnInit {

  @Input() placeholder:string;
  @Input() validator;
  @Input() initialValue = "";
  @Output() closeForm = new EventEmitter();
  @Output() submitter = new EventEmitter<string>()
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      input: []
    })
  }
  ngOnInit(): void {
    this.form.setValue({
      input: this.initialValue
    })
    this.form.get('input').setValidators(this.validator);
  }

  closeFormF(){
    this.closeForm.emit();
  }
  submit(){
    if(!this.form.get('input').errors)
      this.submitter.emit(this.form.get('input').value)
  }

}
