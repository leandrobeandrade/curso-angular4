import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit() {

  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    console.log(this.endereco);
  }
  
  public atualizaNumero(numero: string): void {
    this.numero = numero;
    console.log(this.numero);
  }

  public atualizaComplemento(compl: string): void {
    this.complemento = compl;
    console.log(this.complemento);
  }

  public atualizaForma(forma: string): void {
    this.formaPagamento = forma;
    console.log(this.formaPagamento);
  }

}
