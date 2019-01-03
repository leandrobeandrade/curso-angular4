import Carro from './Carro'
import Moto from './Moto'

let carro = new Carro('Veloster', 3)

let moto = new Moto()
moto.acelerar()

carro.acelerar()

console.log(carro)
console.log(moto)
