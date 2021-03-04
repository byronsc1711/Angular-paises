import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../services/capital.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  hayError: boolean = false;
  paises :Country[]=[];
  termino:string='';
  constructor(public capitalService:CapitalService){
    
  }

  buscar(termino:string){

    this.hayError=false;
    this.termino=termino;

    this.hayError=false;
    console.log(this.termino);
    this.capitalService.buscarPais(this.termino).
    subscribe((paises)=>{console.log(paises);
      this.paises=paises;
    },(error)=>{this.hayError=true;this.paises=[]})
  }

}
