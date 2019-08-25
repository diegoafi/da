import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PageNoFoundComponent } from './shared/page-no-found/page-no-found.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNoFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );


export class AppRoutingModule { }
