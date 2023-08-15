import { Component } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  res=new data()
  constructor(){
    this.res={
      name:'',
      number:0,
      email:'',
      age:'',
      file:'',
      course:'',
      Gender:'',
      check:false,    
    }
  }
  myfunction(info:any){
    console.log(info.value)
  }

  selectedFile: File | undefined;

  onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
      console.log('File selected:', this.selectedFile);
  }

  ageValue!: number;


Gender=[
    {
    id:1,value:"Male "
  },
    {
      id:2,value:"Female "
    }
  ]

}
  

 


class data{
 name!:string;
 number!:number;
 email!:string;
 age!:string;
 file!:any;
 course!:string;
 Gender!:string;
 check!:boolean; 
}

// mindate='2022-06-18';
  // maxdate='-02-31';



   // File: File | undefined;

  // onFileSelected(event: any) {
  //     this.File = event.target.files[0];
  //     console.log('File selected:', this.File);
  // }

  // ageValue!: number;