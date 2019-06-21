import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompileIdentifierMetadata } from '@angular/compiler';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm:FormGroup

  constructor(public dialogRef:MatDialogRef<CreateComponent>, private fb:FormBuilder) {
    this.createForm = this.fb.group({
      position: [null, Validators.required],
      name: [null, Validators.required],
      weight: [null, Validators.required],
      symbol: [null, Validators.required],

    })
   }
 
       onNoClick():void{
         this.dialogRef.close();
       }
  ngOnInit() {
  }

}
