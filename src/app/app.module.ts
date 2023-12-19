import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsObraComponent } from './components/forms-obra/forms-obra.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsObraNovoComponent } from './components/forms-obra-novo/forms-obra-novo.component';

import { InfoObraComponent } from './components/info-obra/info-obra.component';
import { HttpClientModule } from '@angular/common/http'; // Importe o módulo HttpClientModule
import { CommonModule } from '@angular/common';


import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    FormsObraComponent,
    HeaderComponent,
    FormsObraNovoComponent,
    InfoObraComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
