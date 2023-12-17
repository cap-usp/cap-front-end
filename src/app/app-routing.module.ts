import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormUsuarioComponent } from './components/forms/form-usuario/form-usuario.component';
import { FormsArquitetoComponent } from './components/forms/forms-arquiteto/forms-arquiteto.component';
import { FormsConstrutoraComponent} from './components/forms/forms-construtora/forms-construtora.component';
import { FormsObraComponent} from './components/forms/forms-obra/forms-obra.component';



const routes: Routes = [
  { path: 'form-usuario', component: FormUsuarioComponent },
  { path: 'form-arquiteto', component: FormsArquitetoComponent },
  { path: 'form-construtora', component: FormsConstrutoraComponent },
  { path: 'form-obra', component: FormsObraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
