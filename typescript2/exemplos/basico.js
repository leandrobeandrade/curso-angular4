var mensagens = 'Estudando Typescript';
console.log(mensagens);
var primeiroNome = 'Dart';
var segundoNome = 'Vader';
console.log("O nome \u00E9 " + (primeiroNome + ' ' + segundoNome));
var cont = 1;
cont += cont;
console.log(cont);
var filmes1 = [
    { filme: 'Os Oito Odiados', duracao: 100 },
    { filme: 'Django', duracao: 120 },
    { filme: 'Pulp Fiction', duracao: 95 },
    { filme: 'Cães de Aluguel', duracao: 100 },
    { filme: 'Kill Bill', duracao: 110 },
    { filme: 'Django', duracao: 110 }
];
var filmes2 = ['Jackie Brown', 'Assassinos por Natureza', 'Bastardos Inglórios', 'À Prova de Morte'];
console.log(filmes1);
console.log(filmes2);
var testeFilmes1 = filmes1.filter(function (elemento) { return elemento.filme == 'Django'; });
console.log(testeFilmes1);
var testeFilmes = filmes1.reduce(function (anterior, atual) { return anterior + atual.duracao; }, 0);
console.log(testeFilmes);
var testeFilmes2 = filmes2.map(function (elemento) { return elemento.length; });
console.log(testeFilmes2);
