import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuiInputComponent } from './aui-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuiInputComponent
  ],
  exports: [
    AuiInputComponent
  ]
})
export class AuiInputModule { }
