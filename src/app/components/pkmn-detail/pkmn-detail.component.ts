import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pkmn-detail',
  templateUrl: './pkmn-detail.component.html',
  styleUrls: ['./pkmn-detail.component.scss']
})
export class PkmnDetailComponent implements OnInit {

  @Input()
  name: string = '';

ngOnInit(): void {
  console.log(this.name)
}

}
