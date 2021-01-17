import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuiButtonComponent } from './aui-button.component';
import { AuiButtonDirective } from './aui-button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuiButtonComponent,
    AuiButtonDirective
  ],
  exports: [
    AuiButtonComponent
  ]
})
export class AuiButtonModule { }
