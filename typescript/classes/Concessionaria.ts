import Carro from './Carro'

export default class Concessionaria {
    private endereco: string
    private listaCarros: Array<Carro>                   // ou Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaCarros = listaDeCarros
    }

    public fornecerEndereco() {
        return this.endereco
    }

    public mostrarListaCarro(): Carro[] {
        return this.listaCarros
    }
}