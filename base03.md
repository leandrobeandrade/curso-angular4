## BehaviorSubject

* **Arquivo service:**

      import { Injectable } from '@angular/core';
      import { BehaviorSubject } from 'rxjs';


      @Injectable()
      export class PontuacaoService {

        public pontos = new BehaviorSubject<number>(100);          // inicia o valor
        public pontosTotal = this.pontos.asObservable();           // Observa a variável pontos

        constructor() {}

        PontuacaoGeral(nPontos) {                                  // função que atualiza o valor
          this.pontos.next(nPontos);                               // next que armazena o valor atualizado
        }
      }
      
* **Componente qualquer:**
      import { PontuacaoService } from '../../services/pontuacao.service';
      
      _pontos: number;
      
      constructor() {private pontuacaoService: PontuacaoService }
      
      ngOnInit() {
        this.pontuacaoService.pontosTotal.subscribe(pontos => {
          this._pontos = pontos;
          console.log(this._pontos);
        })
      }

      addNumber() {
        this._pontos++;
        this.pontuacaoService.PontuacaoGeral(this._pontos)          // Atualiza a pontuação
      }
