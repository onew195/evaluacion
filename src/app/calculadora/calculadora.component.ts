import { Component, OnInit } from '@angular/core';
import {calculadora} from '../calculadora';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  calculadora: calculadora={
    number: 5
  }

  constructor() { }

  ngOnInit() {
  }

}