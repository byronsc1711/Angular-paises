import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../services/region.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  hayError: boolean = false;
  paises :Country[]=[];
  termino:string='';
  constructor(public regionService:RegionService){
    
  }

  buscar(termino:string){

    this.hayError=false;
    this.termino=termino;

    this.hayError=false;
    console.log(this.termino);
    this.regionService.buscarPais(this.termino).
    subscribe((paises)=>{console.log(paises);
      this.paises=paises;
    },(error)=>{this.hayError=true;this.paises=[]})
  }



}
