import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpgComponent } from './rpg/rpg.component';

const routes: Routes = [
  {path: 'rpg', component: RpgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
