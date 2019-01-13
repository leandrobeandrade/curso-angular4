let teste1 = function(frente: number): boolean {
    return frente < 12
}
let distancia = 12

console.log(`A distância: ${distancia} será o bastante para bater a Águia Real? ${teste1(distancia) ? 'SIM' : 'NÃO'}`)

let call = (name: string) => console.log(`Você copiou o nome: ${name}`)
call('Fulano')

function inc(velocidade: number, inc: number = 1): number {
    return velocidade + inc
}
console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)

function teste(num1: number, num2: number, num3: number = 1): number {
    return num1 + num2 + num3
}
console.log(`teste(): ${teste(1,1)}`)