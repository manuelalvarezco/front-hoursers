import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  @Output() changeValue:EventEmitter<MatRadioChange> = new EventEmitter();

  favoriteSeason: string;
  seasons: string[] = ['Persona', 'Empresa'];

  constructor() { }

  ngOnInit() {

  }

  prueba($even){
    this.changeValue.emit($even)
  }

}
