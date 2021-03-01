import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuiNavbarComponent } from './aui-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuiNavbarComponent],
  exports: [AuiNavbarComponent]
})
export class AuiNavbarModule { }
