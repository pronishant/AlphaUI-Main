
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuiCardComponent } from './aui-card.component';
import { AuiCardTitleComponent } from './aui-card-title/aui-card-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuiCardComponent,
    AuiCardTitleComponent
  ],
  exports: [AuiCardComponent]
})
export class AuiCardModule { }
