import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../common/pokemon.model';
import { PokedexService} from '../pokedex.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
@Input() pokemons : Pokemon[];

public titre: String = 'Pokedex';

  constructor(public pokedexService : PokedexService) { }

  ngOnInit(): void {
    this.pokemons = this.pokedexService.getPokemons();
    
  }

}
