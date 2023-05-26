import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentTablaComponent } from './component-tabla/component-tabla.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    ComponentTablaComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
