import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    exports: [
        HomeComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        FormsModule,
        PAGES_ROUTES,
    ]
})

export class PagesModule { }
