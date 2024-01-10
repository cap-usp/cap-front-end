import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsObraComponent } from './components/obra/forms-obra/forms-obra.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsArquitetoComponent } from './components/arquiteto/forms-arquiteto/forms-arquiteto.component';
import { FormsConstrutoraComponent } from './components/construtora/forms-construtora/forms-construtora.component';
import { FormUsuarioComponent } from './components/usuario/form-usuario/form-usuario.component';
import { PaginaPesquisadorComponent } from './components/pagina-pesquisador/pagina-pesquisador.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ConstrutoraListComponent } from './components/construtora/construtora-list/construtora-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FormListConstrutoraComponent } from './components/construtora/form-list-construtora/form-list-construtora.component';
import { FormListObraComponent } from './components/obra/form-list-obra/form-list-obra.component';
import { ListObraComponent } from './components/obra/list-obra/list-obra.component';
import { FormListArquitetoComponent } from './components/arquiteto/form-list-arquiteto/form-list-arquiteto.component';
import { ListArquitetoComponent } from './components/arquiteto/list-arquiteto/list-arquiteto.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { FormListUsuarioComponent } from './components/usuario/form-list-usuario/form-list-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsObraComponent,
    FormsArquitetoComponent,
    FormsConstrutoraComponent,
    FormUsuarioComponent,
    PaginaPesquisadorComponent,
    FooterComponent,
    ConstrutoraListComponent,
    HeaderComponent,
    FormListConstrutoraComponent,
    FormListObraComponent,
    ListObraComponent,
    FormListArquitetoComponent,
    ListArquitetoComponent,
    ListUsuarioComponent,
    FormListUsuarioComponent,
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
