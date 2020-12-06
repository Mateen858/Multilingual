import { SharedModule } from './../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTE } from './auth.routing';

@NgModule({
  imports: [
    RouterModule.forChild([AUTH_ROUTE]),
    SharedModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
