import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// Routes
import { APP_ROUTES } from './app.routes';

// Modules
import { PagesModule } from './pages/pages.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
