var teste1 = function (frente) {
    return frente < 12;
};
var distancia = 12;
console.log("A dist\u00E2ncia: " + distancia + " ser\u00E1 o bastante para bater a \u00C1guia Real? " + (teste1(distancia) ? 'SIM' : 'NÃO'));
var call = function (name) { return console.log("Voc\u00EA copiou o nome: " + name); };
call('Fulano');
function inc(velocidade, inc) {
    if (inc === void 0) { inc = 1; }
    return velocidade + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
function teste(num1, num2, num3) {
    if (num3 === void 0) { num3 = 1; }
    return num1 + num2 + num3;
}
console.log("teste(): " + teste(1, 1));
