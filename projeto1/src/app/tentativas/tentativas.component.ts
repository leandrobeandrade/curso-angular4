import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  @Input() tentativas: number;                              // para externalizar a variável tentativa

  constructor() { }

  ngOnInit() {
  }

}
