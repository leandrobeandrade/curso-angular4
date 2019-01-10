import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASE } from './frase.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASE;
  respostas: string = '';

  rodada: number = 0;
  rodadaFrase: Frase;

  progresso: number = 0;
  
  tentativa: number = 3;

  mostraErro: boolean = false;

  icones: string;
  
  @ViewChild('textos') textArea: ElementRef;
  
  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();
  
  constructor() {
    //this.rodadaFrase = this.frases[this.rodada];         -> foi transformado em método por se repetir
    this.atualizaRodada();
    console.log(this.rodadaFrase);
  }

  atualizaResposta(evento: Event): void {
    this.respostas  = (<HTMLInputElement>evento.target).value;
    //console.log(this.respostas);
  }

  verificaResposta(evento: Event): void {

    if(this.rodadaFrase.frasePt == this.respostas) {
    
      //atualiza a rodada
      this.rodada++;

      if(this.rodada > 3) {                                     // acertou as traduções                     
        this.encerrarJogo.emit('vitoria');                      // controla o template de vitoria ou derrota no app
      }

      //atualiza rodada
      //this.rodadaFrase = this.frases[this.rodada];            -> foi transformado em método por se repetir
      this.atualizaRodada();

      //atualiza progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      //esconde o alert de erro
      this.mostraErro = false;

      //limpa textarea
      this.respostas = '';
      
    } else {
      //diminui numero de tentativas
      this.tentativa--;

      //mostra o alert de erro
      this.mostraErro = true;

      if(this.tentativa == -1) {                              // sem mais quantidade de tentativas
        this.respostas = '';
        this.encerrarJogo.emit('derrota');                    // controla o template de vitoria ou derrota no app
      }
    }
    //foco no textarea
    this.textArea.nativeElement.focus();
  }

  atualizaRodada(): void {
    //atualiza o objeto rodadaFrase
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

}
