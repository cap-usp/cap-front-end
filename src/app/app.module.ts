import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsObraComponent } from './components/forms/forms-obra/forms-obra.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsArquitetoComponent } from './components/forms/forms-arquiteto/forms-arquiteto.component';
import { FormsConstrutoraComponent } from './components/forms/forms-construtora/forms-construtora.component';
import { FormUsuarioComponent } from './components/forms/form-usuario/form-usuario.component';
import { PaginaPesquisadorComponent } from './components/pagina-pesquisador/pagina-pesquisador.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ConstrutoraListComponent } from './components/lists-forms/construtora-list/construtora-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsObraComponent,
    FormsArquitetoComponent,
    FormsConstrutoraComponent,
    FormUsuarioComponent,
    PaginaPesquisadorComponent,
    FooterComponent,
    ConstrutoraListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
