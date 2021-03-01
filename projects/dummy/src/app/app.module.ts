import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuiButtonModule, AuiCardModule, AuiInputModule, AuiNavbarModule } from 'projects/alpha-ui/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   AuiButtonModule,
//   AuiCardModule,
//   AuiNavbarModule,
//   AuiInputModule
// } from 'alpha-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuiButtonModule,
    AuiCardModule,
    AuiNavbarModule,
    AuiInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
