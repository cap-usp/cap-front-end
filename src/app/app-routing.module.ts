import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormListConstrutoraComponent } from './components/construtora/form-list-construtora/form-list-construtora.component';
import { FormListArquitetoComponent } from './components/arquiteto/form-list-arquiteto/form-list-arquiteto.component';
import { FormListObraComponent } from './components/obra/form-list-obra/form-list-obra.component';
import { FormListUsuarioComponent } from './components/usuario/form-list-usuario/form-list-usuario.component';
import { ListObraComponent } from './components/obra/list-obra/list-obra.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent, pathMatch: 'full'},
  { path: 'form-list-construtora', component: FormListConstrutoraComponent},
  { path: 'form-list-arquiteto', component: FormListArquitetoComponent},
  { path: 'form-list-obra', component: FormListObraComponent},
  { path: 'form-list-usuario', component: FormListUsuarioComponent},
  { path: 'list-obra', component: ListObraComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
