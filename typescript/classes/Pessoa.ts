import Carro from './Carro'

export default class Pessoa {
    private nome: string
    private carro: any
    private carroPref: any

    constructor(nome: string, carroPref: string) {
        this.nome = nome
        this.carroPref = carroPref
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPref(): string {
        return this.carroPref
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroPossui(): any {
        return this.carro
    }
}