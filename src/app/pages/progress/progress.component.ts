import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso = 50;
  constructor() { }

  ngOnInit( ) {
  }
  cambiarValor( value ) {
    if (this.progreso >= 95 && value > 0) {
      this.progreso = 100 - 5;
      alert('Llegaste al limite de presupuesto');
    }
    if (this.progreso <= 5 && value < 0) {
      this.progreso = 0 + 5;
      alert('No hay presupuesto');
    }
    this.progreso = this.progreso + value;
  }
}
