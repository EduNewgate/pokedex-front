import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PkmnListComponent } from './components/pkmn-list/pkmn-list.component';

const routes: Routes = [
  { path: '', component: PkmnListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
