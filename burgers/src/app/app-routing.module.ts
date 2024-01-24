import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificaPaninoComponent } from './modifica-panino/modifica-panino.component';
import { CardsPaniniComponent } from './cards-panini/cards-panini.component';


const routes: Routes = [

    {path: "panini", component: CardsPaniniComponent},
    {path: "ordini", component: ModificaPaninoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
