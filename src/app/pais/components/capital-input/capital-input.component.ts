import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html',
  styleUrls: ['./capital-input.component.css']
})
export class CapitalInputComponent {

  @Output() onEnter:EventEmitter<string>= new EventEmitter();
    termino:string='';
    buscar(){
      this.onEnter.emit(this.termino);
    }

}
