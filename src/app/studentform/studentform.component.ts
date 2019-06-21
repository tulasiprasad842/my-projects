import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {

  model:any={};
  clickme(){
    console.log("SUBMIT==>",this.model);
    

}
}



