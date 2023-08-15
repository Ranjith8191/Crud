import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {

  res=new data()
 constructor(){

  this.res={
     name:'',
     number:0,
     email:'',
     age:'',
     file:'',
  }
 }

myfunction(info:any){
  console.log(info.value)
}

selectedfile: File | undefined;

onfileselected(event:any)
{
  this.selectedfile=event.target.files[0];
  console.log('FileSelected:',this.selectedfile)
}

}

class data{
  name!:string;
  number!:number
  email!:string;
  age!:string;
  file!:any;
}