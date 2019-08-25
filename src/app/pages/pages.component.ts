import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-header></app-header>
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
