import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(){}
hide=true;
onClickSubmit(value){
   alert('Your Form has been submitted');
}
}