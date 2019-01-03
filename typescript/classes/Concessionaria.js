"use strict";
exports.__esModule = true;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarro = function () {
        return this.listaCarros;
    };
    Concessionaria.prototype.fornecerHorariosFuncion = function () {
        return 'De segunda à sexta das 08:00 às 17:30';
    };
    return Concessionaria;
}());
exports["default"] = Concessionaria;
