import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../common/pokemon.model';
import { PokedexService} from '../pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {
public pokemons: Pokemon[]= new Array<Pokemon>();
public pokemonDetail : Pokemon;

  constructor(public pokedexService : PokedexService) { }

  ngOnInit(): void {
    
  }

}
