import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuiCardComponent } from './aui-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuiCardComponent],
  exports: [AuiCardComponent]
})
export class AuiCardModule { }
