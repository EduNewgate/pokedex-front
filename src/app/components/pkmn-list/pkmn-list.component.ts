import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.scss']
})
export class PkmnListComponent implements OnInit {

  pkmnList: any = new Array();
  offset: number = 0;
  limit: number = 20;
  searchText: string = '';

  loading: boolean = false;

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.getPkmnList();

  }

  getPkmnList() {
    this.loading = true;
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe({
      next: (res: any) => {
        this.pkmnList = [...this.pkmnList, ...res.resultados.entradas];
      },
      error: (e) => {
        this.offset -=20;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  @HostListener("window:scroll", ["$event"])
  getScrollHeight(): void {
    if ((window.innerHeight + window.scrollY >= document.body.offsetHeight) && !this.loading) {
      this.offset += 20;
      this.getPkmnList();
    }
  }

  submit() {
    this.pkmnList = [];
    this.loading = true;
    this.pokemonService.getPokemonByName(this.searchText).subscribe({
      next: (res: any) => {
        this.pkmnList = res.resultados.entradas;
      },
      error: (e) => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        if(this.pkmnList.length == 0) {
          this.pkmnList = null;
        }
      }
    });
  }
}