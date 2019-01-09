import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() tentativas: number;                              // para internalizar a variável tentativa

  icone1: string = 'as';
  icone2: string = 'as';
  icone3: string = 'as';

  constructor() { }

  ngOnInit() {
    this.tentativas = 3;

    this.icone1 = 'as';
    this.icone2 = 'as';
    this.icone3 = 'as';
  }

  ngOnChanges() {
    
    if(this.tentativas == 2) {
      this.icone1 = 'ar';
    } else if(this.tentativas == 1) {
      this.icone2 = 'ar';
    } else {
      this.icone3 = 'ar';
    }
  }

}
