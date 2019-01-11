var teste1 = function (frente) {
    return frente < 12;
};
var distancia = 12;
console.log("Esta " + distancia + " ser\u00E1 o bastante para bater a \u00C1guia Real? " + (teste1(distancia) ? 'SIM' : 'NÃO'));
