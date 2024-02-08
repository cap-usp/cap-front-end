import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormListConstrutoraComponent } from './components/construtora/form-list-construtora/form-list-construtora.component';
import { FormListArquitetoComponent } from './components/arquiteto/form-list-arquiteto/form-list-arquiteto.component';
import { FormListObraComponent } from './components/obra/form-list-obra/form-list-obra.component';
import { FormListUsuarioComponent } from './components/usuario/form-list-usuario/form-list-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ObraIndividualComponent } from './components/obra/obra-individual/obra-individual.component';

const routes: Routes = [
  { path: '', component: FormListObraComponent, pathMatch: 'full'},
  { path: 'construtora', component: FormListConstrutoraComponent},
  { path: 'arquiteto', component: FormListArquitetoComponent},
  { path: 'obra', component: FormListObraComponent},
  { path: 'obra/:id', component: ObraIndividualComponent},
  { path: 'usuario', component: FormListUsuarioComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: FormListObraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
