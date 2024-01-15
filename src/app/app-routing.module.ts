import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormUsuarioComponent } from './components/usuario/form-usuario/form-usuario.component';
import { FormsArquitetoComponent } from './components/arquiteto/forms-arquiteto/forms-arquiteto.component';
import { FormsConstrutoraComponent} from './components/construtora/forms-construtora/forms-construtora.component';
import { FormsObraComponent} from './components/obra/forms-obra/forms-obra.component';
import { PaginaPesquisadorComponent } from './components/pagina-pesquisador/pagina-pesquisador.component';
import { FormListConstrutoraComponent } from './components/construtora/form-list-construtora/form-list-construtora.component';
import { FormListArquitetoComponent } from './components/arquiteto/form-list-arquiteto/form-list-arquiteto.component';
import { FormListObraComponent } from './components/obra/form-list-obra/form-list-obra.component';
import { FormListUsuarioComponent } from './components/usuario/form-list-usuario/form-list-usuario.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';



const routes: Routes = [
  { path: '', component: PaginaInicialComponent, pathMatch: 'full'},
  { path: 'pagina-pesquisador', component: PaginaPesquisadorComponent},
  { path: 'form-list-construtora', component: FormListConstrutoraComponent},
  { path: 'form-list-arquiteto', component: FormListArquitetoComponent},
  { path: 'form-list-obra', component: FormListObraComponent},
  { path: 'form-list-usuario', component: FormListUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
