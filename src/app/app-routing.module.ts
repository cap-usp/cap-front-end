import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormUsuarioComponent } from './components/usuario/form-usuario/form-usuario.component';
import { FormsArquitetoComponent } from './components/arquiteto/forms-arquiteto/forms-arquiteto.component';
import { FormsConstrutoraComponent} from './components/construtora/forms-construtora/forms-construtora.component';
import { FormsObraComponent} from './components/obra/forms-obra/forms-obra.component';
import { PaginaPesquisadorComponent } from './components/pagina-pesquisador/pagina-pesquisador.component';
import { FormListConstrutoraComponent } from './components/construtora/form-list-construtora/form-list-construtora.component';



const routes: Routes = [
  { path: 'form-usuario', component: FormUsuarioComponent },
  { path: 'form-arquiteto', component: FormsArquitetoComponent },
  { path: 'form-construtora', component: FormsConstrutoraComponent },
  { path: 'form-obra', component: FormsObraComponent },
  { path: 'pagina-pesquisador', component: PaginaPesquisadorComponent},
  { path: 'form-list-construtora', component: FormListConstrutoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
