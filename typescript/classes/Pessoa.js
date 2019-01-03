"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPref) {
        this.nome = nome;
        this.carroPref = carroPref;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPref = function () {
        return this.carroPref;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroPossui = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports["default"] = Pessoa;
