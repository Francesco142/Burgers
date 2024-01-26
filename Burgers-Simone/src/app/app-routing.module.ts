import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './menu/components/home-principale/home.component';
import { OperatorComponent } from './operator/operator.component';
import { ModificaPaninoComponent } from './menu/components/modifica-panino/modifica-panino.component';

const routes: Routes = [
  { path: "", component: HomeComponent, children: 
    [{ path: "panino/:id", component: ModificaPaninoComponent}] },
  { path: "operator", component: OperatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
