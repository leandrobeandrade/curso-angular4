import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../shared/pedido-model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  // preenchido por causa do constructor da classe Pedido
  public pedido: Pedido = new Pedido('', '', '', '');

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    // this.ordemCompraService.efetivaCompra()
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

  public confirmarCompra() {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivaCompra(this.pedido)
  }

}
