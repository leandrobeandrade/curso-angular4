import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASE } from './frase.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASE;
  instrucao: string = 'Traduza a frase:';
  respostas: string;

  rodada: number = 0;
  rodadaFrase: Frase;

  progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);
  }

  atualizaResposta(evento: Event): void {
    this.respostas  = (<HTMLInputElement>evento.target).value;
  //  console.log(this.respostas);
  }

  verificaResposta(evento: Event): void {

    if(this.rodadaFrase.frasePt == this.respostas) {
      alert('Tradução correta.')
    
      //atualiza a rodada
      this.rodada++;

      //atualiza progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      console.log(this.progresso)

      //atualiza o objeto rodadaFrase
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      alert('Tradução errada')
    }
  }

  ngOnInit() {
  }

}
