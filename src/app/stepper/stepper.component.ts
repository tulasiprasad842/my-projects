import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  firstFormGroup:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup=this.fb.group({
      firstName:[null,Validators.required],
      lastName:[null,Validators.required],
      Age:[null,Validators.required],
      Date_of_Birth:[null,Validators.required],
    })
  }
}
