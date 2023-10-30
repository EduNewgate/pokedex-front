import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pkmn-card',
  templateUrl: './pkmn-card.component.html',
  styleUrls: ['./pkmn-card.component.scss']
})
export class PkmnCardComponent implements OnInit {

  @Input()
  pokemon: any;

  tipos: any = new Array();

  constructor() {

  }

  ngOnInit(): void {
    this.getTipos();
  }

  getTipos() {
    this.pokemon.formas.forEach((forma: any) => {
      if (forma.default !=null && forma.default == true) {
        for (let index = 0; index < forma.tipos.length; index++) {
          const element = forma.tipos[index];
          this.tipos.push(element)
        }
      }
    });
  }

}
