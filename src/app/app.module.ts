import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// Routes
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNoFoundComponent } from './shared/page-no-found/page-no-found.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNoFoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
