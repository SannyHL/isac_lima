import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CursoComponent } from './curso/curso.component';
import { BiografiaComponent } from './biografia/biografia.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'biografia', component: BiografiaComponent},
  {path: 'contatos', component: ContatoComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'agenda', component: AgendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
