import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PkmnListComponent } from './components/pkmn-list/pkmn-list.component';
import { PkmnDetailComponent } from './components/pkmn-detail/pkmn-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/pkmn-list', pathMatch: 'full' },
  { path: 'pkmn-list', component: PkmnListComponent },
  { path: 'pkmn-detail', component: PkmnDetailComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
