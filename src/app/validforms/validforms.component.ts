import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-validforms',
  templateUrl: './validforms.component.html',
  styleUrls: ['./validforms.component.css']
})
export class ValidformsComponent implements OnInit {
  title:'Validforms'
  minDate=new Date();
  reactiveForm:FormGroup;
  statelist:string[]=['India', 'Pakistan', 'China', 'America', 'Australia', 'Europe', 'Bangladesh'];

    constructor(private fb:FormBuilder){
  }
   ngOnInit() {
    this.registerform();
}
   registerform(){
    this.reactiveForm = this.fb.group({
      firstName: [null,Validators.required],
      lastName:  [null,Validators.required],
      emailId:   [null,Validators.required],
      state:  [null,Validators.required],
      mobileNo: [null, Validators.required],
      date:[null, [Validators.required]]
    });

  }


        onSubmit(){
          console.log('reactiveform' , this.reactiveForm.value);
        }
   



}
