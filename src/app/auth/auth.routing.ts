import { AuthComponent } from './auth.component';
import { Route } from '@angular/router';

export const AUTH_ROUTE: Route = {
  path: '',
 
  children : [
    {path:'', component: AuthComponent, data :{title: 'Login'}},
  ]
};



