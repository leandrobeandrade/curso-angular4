class Carro {
    private modelo: string
    private numPortas: number
    private velocidade: number = 0

    constructor(modelo:string, numPortas: number ) {     // pega parâmetros na instanciação do objeto
        this.modelo = modelo
        this.numPortas = numPortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

// let CarroA = new Carro('Veloster', 3)
// console.log(CarroA)
// CarroA.acelerar()
// console.log(CarroA)
// CarroA.acelerar()
// console.log(CarroA)
// CarroA.acelerar()

class Concessionaria {
    private endereco: string
    private listaCarros: any

    constructor(endereco: string) {
        this.endereco = endereco
    }

    public fornecerEndereco() {
        return this.endereco
    }

    public mostrarListaCarro(): any {
        return this.listaCarros
    }
}

// let concessionaria = new Concessionaria('Av. Paulista');
// console.log(concessionaria);

class Pessoa {
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

    public comprarCarro(carro: string): void {
        
    }

    public dizerCarroPossui(): any {
        return this.carro
    }
}

let pessoa = new Pessoa('Fulano', 'Captiva')
console.log(pessoa)