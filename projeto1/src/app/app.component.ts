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
    setTimeout(() => {
      this.jogoEmAndamento = false;
      this.encerramentoJogo = tipo;
    }, 700);
  }

  reiniciarJogo() {
    setTimeout(() => {
      this.jogoEmAndamento = true;
      this.encerramentoJogo = undefined;
    }, 700)
  }

}
