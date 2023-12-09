import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsObraComponent } from './components/forms-obra/forms-obra.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsObraNovoComponent } from './components/forms-obra-novo/forms-obra-novo.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FormsObraComponent,
    HeaderComponent,
    FormsObraNovoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
