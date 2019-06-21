import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  selectForm:FormGroup;
   
  courselist:string[]=['Angular', 'Java','Oracle', 'Html', 'C++', 'Devops'];
  userlist:any[]=[
    {value:'user-1', viewValue:'user1'},
    {value:'user-2', viewValue:'user2'},
    {value:'user-3', viewValue:'user3'},
    {value:'user-4', viewValue:'user4'}
  ]
  constructor(private fb:FormBuilder) { 
    this.selectForm=this.fb.group({
      Name:[null,  Validators.required],
      courses:[null,  Validators.required],
      Ip_address:[null, Validators.required],
      userName:[null, Validators.required],
      password:[null, Validators.required],
      Options:[null,  Validators.required]
    })
  }

    

  onSubmit(){
    console.log('selectform' , this.selectForm.value);
  }


}
