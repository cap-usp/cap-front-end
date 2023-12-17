import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsObraComponent } from './components/forms/forms-obra/forms-obra.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsArquitetoComponent } from './components/forms/forms-arquiteto/forms-arquiteto.component';
import { FormsConstrutoraComponent } from './components/forms/forms-construtora/forms-construtora.component';
import { FormUsuarioComponent } from './components/forms/form-usuario/form-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsObraComponent,
    FormsArquitetoComponent,
    FormsConstrutoraComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
