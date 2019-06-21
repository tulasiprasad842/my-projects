import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 editForm:FormGroup;
  constructor(public dialogRef:MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:User, private fb:FormBuilder) { 

      this.editForm=this.fb.group({
        position: [null, Validators.required],
        name: [null, Validators.required],
        weight: [null, Validators.required],
        symbol: [null, Validators.required]
      });

      if(data){
        this.editForm.patchValue(data);
      }
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}
