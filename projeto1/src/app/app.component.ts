import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  jogoEmAndamento: boolean = true;
  encerramentoJogo: string;
  
  encerraJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.encerramentoJogo = tipo;
  }

  reiniciarJogo() {
    this.jogoEmAndamento = true;
    this.encerramentoJogo = undefined;
  }

}
