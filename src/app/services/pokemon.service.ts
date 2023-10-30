import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonList = {}

  constructor(private http: HttpClient) { }

  getPokemonList(offset?: number, limit?: number) {
    return this.http.get('http://localhost:3000/listadoPkmn?offset=' + offset + '&limit=' + limit);
  }

  getPokemonByName(searchText: string) {
    return this.http.get('http://localhost:3000/listadoPkmn?searchText=' + searchText);
  }
}
