import { Component,OnInit } from '@angular/core';
import {FormGroup ,FormControl, Validators,FormBuilder,AbstractControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  reactiveForm:FormGroup;
  validForm:boolean=false;
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

passMatch(confirm,pass){
  return this.reactiveForm.get(confirm).value != this.reactiveForm.get(pass).value && this.reactiveForm.get(pass).value !='' && this.reactiveForm.get(confirm).value !='';
}

reactiveSubmit(){
   const newVar = this.reactiveForm.value;
  if(this.reactiveForm.valid && newVar.confirm == newVar.pass){
      alert('You have submitted the form successfully')
  }
  else{
    this.isFieldValid(this.reactiveForm);
  }
}

}