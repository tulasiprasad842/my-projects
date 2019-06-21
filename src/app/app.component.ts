import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from './data.service';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

export interface User{
  position:number;
  name:string;
  weight:number;
  symbol:string;
}

// const ELEMENT_DATA: User[]=[
//  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crudoperations';

  dataSource;
  users:User[];

  constructor(private dialog: MatDialog, private appservice:DataService){}

  displayedColumns: string[]=['position', 'name', 'weight', 'symbol'];
  
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort:MatSort;

  ngOnInit(){
    return this.appservice.getdata().subscribe((users:User[])=>{
      this.users=users;
      this.dataSource= new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    })
}
     applyFilter(filterValue:string){
      this.dataSource.filter = filterValue.trim().toLowerCase();
     }

     delete(element){
       this.dataSource.data=this.dataSource.data.filter(i=>i !==element);   
     }

     openDialogEdit(User){
       console.log('User=>', User);
       const dialogRef=this.dialog.open(EditComponent, {
        width:"300px",
        data:User
       });

       dialogRef.afterClosed().subscribe(result=>{
         this.users.forEach(x=>{
           if(x.position==result.position){
             x.name=result.name;
             x.position=result.position;
             x.weight=result.weight;
             x.symbol=result.symbol;
           }
         });

         this.dataSource= new MatTableDataSource(this.users);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.sort;
       });
     }

     openDialogCreate(User){
       console.log('User=>',User);
       const dialogRef=this.dialog.open(CreateComponent, {
        width:"300px",
        data:User
       });

       dialogRef.afterClosed().subscribe(result=>{
         if(result){
           this.users.push(result);
           this.dataSource= new MatTableDataSource(this.users);
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;
       });
      }

       getColor(position){
         if(position%2==0){
           return 'green'
        }else{
        return 'red'
        }
    }
}
