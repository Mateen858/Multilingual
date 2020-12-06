import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports:[
    CommonModule,
    TranslateModule
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
