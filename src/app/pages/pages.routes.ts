import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'graficas1', component: Graficas1Component },
          { path: 'progress', component: ProgressComponent },
          { path: '', pathMatch: 'full', redirectTo: '/home' }
        ]
    },
  ];

export const PAGES_ROUTES = RouterModule.forChild(  pagesRoutes );
