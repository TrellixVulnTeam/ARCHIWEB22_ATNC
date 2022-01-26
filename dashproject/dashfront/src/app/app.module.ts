import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultatRechercheComponent } from './components/resultat-recherche/resultat-recherche.component';
import { HeaderComponent } from './components/header/header.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarDirectiveComponent } from './components/search-bar-directive/search-bar-directive.component';
import { SerachBarDirectiveDirective } from './components/serach-bar-directive.directive';
import { SearchBarDirectiveDirective } from './components/recherche/search-bar-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResultatRechercheComponent,
    HeaderComponent,
    RechercheComponent,
    FooterComponent,
    SearchBarDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
