import { Injectable } from '@angular/core';
import { Pokemon } from './common/pokemon.model'
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  /* Je crée ma variable pokemons qui contient un tableau de type Pokemon*/
public pokemons: Pokemon []= new Array <Pokemon>();
  constructor() { 
  /* J'ajoute les Pokemon a mon tableau représenté par ma variable pokemons*/
    this.pokemons.push(
      new Pokemon ('Pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Pikachu est le Pokémon Souris.Plus la puissance électrique de Pikachu est élevée, plus les poches de ses joues sont extensibles.'),
      new Pokemon ('Carapuce','https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'Quand il rentre son cou dans sa carapace, il peut projeter  à haute pression.'),
      new Pokemon ('Salameche', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png','Il préfère ce qui est chaud. En cas de pluie, de la vapeur se forme autour de sa queue.'),
      new Pokemon ('Bulbizarre', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', 'Il y a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour.'),
      new Pokemon ('Rondoudou','https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png','Il a une des meilleures capacités pulmonaires parmi les Pokémon. Il chante des berceuses à son adversaire jusquà ce que sommeil sensuive.'),
      new Pokemon ('Goupix','https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png','Quand il est jeune, ce Pokémon a six queues magnifiques. De nouvelles queues apparaissent tout au long de sa croissance.'),
      new Pokemon ('Staross', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png','Sil déchaîne son pouvoir psychique puissant, son organe appelé « cœur » se met à briller de sept couleurs.'),
    );
  }
/* Methode pour recuperer mon tableau de Pokemon*/
public getPokemons(): Pokemon[] {
  return this.pokemons;
}
/* Methode pour ajouter un pokemon*/
public addPokemon(pokemon:Pokemon){
  this.pokemons.push(pokemon);
}

}
