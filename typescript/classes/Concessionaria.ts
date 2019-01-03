import Carro from './Carro'

import { ConcessionariaInterface } from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterface{
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

    public fornecerHorariosFuncion(): string {
        return 'De segunda à sexta das 08:00 às 17:30'
    }
}