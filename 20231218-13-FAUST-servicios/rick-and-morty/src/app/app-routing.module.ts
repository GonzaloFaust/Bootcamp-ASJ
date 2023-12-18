import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {path: 'personaje/:id-character', component: CardComponent },
  {path: "**", component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
