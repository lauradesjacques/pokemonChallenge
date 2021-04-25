import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { CreatePokemonPageComponent } from './create-pokemon-page/create-pokemon-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    CreatePokemonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
