import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0 , transform: 'translate(-50px, 0)' }),
        animate('500ms ease-in-out') // duração aceleração
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0 , transform: 'translate(50px, 0)' }),
        animate('500ms ease-in-out') // duração aceleração
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {
  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  exibirPainel(valor) {
    this.cadastro = valor == 'cadastro' ? true : false; 
  }

}
