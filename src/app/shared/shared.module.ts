import { NgModule } from '@angular/core';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        PageNoFoundComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
    ],
    exports: [
        PageNoFoundComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
    ]
})

export class  SharedModule {}