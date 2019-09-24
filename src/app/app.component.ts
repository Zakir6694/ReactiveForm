import { Component,OnInit } from '@angular/core';
import {FormGroup ,FormControl, Validators,FormBuilder,AbstractControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  reactiveForm:FormGroup;
  constructor(private fb:FormBuilder){}
 ngOnInit(){
   this.reactiveForm = this.fb.group({
    emailId :["",[Validators.required]],
    pass :["",[Validators.required]],
    confirm :["",[Validators.required]]
   });
 }
 erroMsg(field:string){
   return !this.reactiveForm.get(field).valid && this.reactiveForm.get(field).touched ;
 }
 isFieldValid(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.isFieldValid(control);
    }
  });
}

reactiveSubmit(){
  if(this.reactiveForm.valid){
      alert('You have submitted the form successfully')
  }
  else{
    this.isFieldValid(this.reactiveForm);
  }
}

 /*errorMsg(field:string){
   return this.reactiveForm.get(field).valid && this.reactiveForm.get(field).touched;
 }*/
}