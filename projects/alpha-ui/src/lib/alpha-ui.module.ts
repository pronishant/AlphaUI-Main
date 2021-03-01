
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlphaUiComponent } from './alpha-ui.component';



@NgModule({
  declarations: [
    AlphaUiComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AlphaUiComponent,
  ]
})
export class AlphaUiModule { }
