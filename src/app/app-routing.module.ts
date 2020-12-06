import { RoutesPreloadService } from './shared/services/routes-preload/routes-preload.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'auth', data:{preload:true}, loadChildren:()=> import('./auth/auth.module').then(u=>u.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:RoutesPreloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
