let teste1 = function(frente: number): boolean {
    return frente < 12
}
let distancia = 12

console.log(`Esta ${distancia} será o bastante para bater a Águia Real? ${teste1(distancia) ? 'SIM' : 'NÃO'}`)