import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})

export class PorPaisComponent{

  hayError: boolean = false;
  paises :Country[]=[];
  termino:string='';
  constructor(public paisService:PaisService){
    
  }
  
  buscar(termino:string){

    this.hayError=false;
    this.termino=termino;

    this.hayError=false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).
    subscribe((paises)=>{console.log(paises);
      this.paises=paises;
    },(error)=>{this.hayError=true;this.paises=[]})
  }

}
