import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  {

  expandForm:FormGroup;
  
constructor(private fb:FormBuilder){
  this.expandForm=this.fb.group({
    firstName:[null,Validators.required],
    lastName:[null,Validators.required],
    Age:[null,Validators.required],
    Date_of_Birth:[null,Validators.required],
    fatherName:[null,Validators.required],
    motherName:[null,Validators.required],
    streetName:[null,Validators.required],
    city:[null,Validators.required],
    State:[null,Validators.required],
    mobileNo:[null,Validators.required],
    emailId:[null,Validators.required],
    alternate_mobileNo:[null,Validators.required],
    alternate_emailId:[null,Validators.required]
  })
    
  
}
step=null;
 

setStep(index: number) {
 this.step = index;
}

nextStep() {
 this.step++;
}

prevStep() {
 this.step--;

}

}
