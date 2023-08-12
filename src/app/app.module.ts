import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from '../components/form/form.component';
import {FormsModule} from "@angular/forms";
import {PageOneComponent} from "../components/page-one/page-one.component";
import {PageTwoComponent} from "../components/page-two/page-two.component";
import {PageThreeComponent} from "../components/page-three/page-three.component";
import {FinishFormLabelComponent} from "../components/finish-form-label/finish-form-label.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    FinishFormLabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
