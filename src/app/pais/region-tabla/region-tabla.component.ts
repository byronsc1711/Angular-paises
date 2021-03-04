import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../interfaces/pais.interfaces';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styleUrls: ['./region-tabla.component.css']
})
export class RegionTablaComponent {

  @Input () paises: Country[]=[];

}
