import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent ,loginModal} from './app.component';
import {DemoMaterialModule} from './angular-material';

@NgModule({
  imports:      [ BrowserModule, FormsModule,DemoMaterialModule,BrowserAnimationsModule,ReactiveFormsModule ],
  declarations: [ AppComponent,loginModal],
  bootstrap:    [ AppComponent ],
  entryComponents : [loginModal]
})
export class AppModule { }
