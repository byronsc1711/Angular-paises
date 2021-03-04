import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../interfaces/pais.interfaces';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent {
  @Input () paises: Country[]=[];

}
