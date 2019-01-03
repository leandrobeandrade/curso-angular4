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
// let CarroA = new Carro('Veloster', 3)
// console.log(CarroA)
// CarroA.acelerar()
// console.log(CarroA)
// CarroA.acelerar()
// console.log(CarroA)
// CarroA.acelerar()
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarro = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
// let concessionaria = new Concessionaria('Av. Paulista');
// console.log(concessionaria);
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
var pessoa = new Pessoa('Fulano', 'Captiva');
console.log(pessoa.dizerCarroPref());
