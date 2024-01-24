import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPaniniComponent } from './cards-panini/cards-panini.component';
import { ModificaPaninoComponent } from './modifica-panino/modifica-panino.component';
import { PaginaInizialeasdComponent } from './pagina-inizialeasd/pagina-inizialeasd.component';
import { OperatorPageComponent } from './operator-page/operator-page.component';


const routes: Routes = [
  {path: "", component: PaginaInizialeasdComponent,
  children: [
    {
      path: "panino/:id", // child route path
      component: ModificaPaninoComponent, // child route component that the router renders
    }
  ]},
    {path: "ordini", component: OperatorPageComponent}//pezzo di michele e dypa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
