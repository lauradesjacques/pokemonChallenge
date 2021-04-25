import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../common/pokemon.model';
import { PokedexService} from '../pokedex.service';


@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent implements OnInit {
public pokemon:Pokemon;
  constructor(public pokedexService : PokedexService) { }

  ngOnInit(): void {
    
  }

}
