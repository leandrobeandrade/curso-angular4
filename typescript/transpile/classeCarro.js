"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numPortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numPortas = numPortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var CarroA = new Carro('Veloster', 3);
console.log(CarroA);
CarroA.acelerar();
console.log(CarroA);
CarroA.acelerar();
console.log(CarroA);
CarroA.acelerar();
