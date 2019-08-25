import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda = 'leyenda';
  @Input() progreso: number;

  // tslint:disable-next-line: no-output-rename
  @Output('actualizaValor') cambioValor = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }
  onChanges( newValue: number ) {
    const elemHTML = document.getElementsByName('progreso');
    console.log(elemHTML);

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.cambioValor.emit(this.progreso);
  }
  cambiarValor(value: number) {
    if (this.progreso >= 95 && value > 0) {
      this.progreso = 100 - 5;
      alert('Llegaste al limite de presupuesto');
    }
    if (this.progreso <= 5 && value < 0) {
      this.progreso = 0 + 5;
      alert('No hay presupuesto');
    }
    this.progreso = this.progreso + value;
    this.cambioValor.emit(this.progreso);
  }
}
