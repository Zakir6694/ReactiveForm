import { Component,OnInit ,Inject} from '@angular/core';
import {FormGroup ,FormControl, Validators,FormBuilder,AbstractControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  reactiveForm:FormGroup;
  validForm:boolean=false;
  constructor(private fb:FormBuilder,public dialog:MatDialog){}
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
loginModal(): void {
    const dialogRef = this.dialog.open(loginModal, {
      width: '400px',
      height:'300px',
      data: {}
    });
}

}
@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.html',
  styleUrls: ['login-modal.css']
})
export class loginModal implements OnInit {
 loginForm:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<loginModal>,
    @Inject(MAT_DIALOG_DATA) public data,private lg:FormBuilder) {}

  closeBtn(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
   this.loginForm = this.lg.group({
    emailId :["",[Validators.required]],
    pass :["",[Validators.required]]
   });
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
loginBtn(){
  if(this.loginForm.valid){
      alert('You have login to the System')
      this.closeBtn();
  }
  else{
    this.isFieldValid(this.loginForm);
  }
}

  contact(){
    alert("We will forward you the password");
  }

}