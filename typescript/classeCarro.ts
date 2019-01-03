class Carro {
    private modelo: string
    private numPortas: number
    private velocidade: number = 0

    constructor(modelo:string, numPortas: number ) {     // pega parâmetros na instanciação do objeto
        this.modelo = modelo
        this.numPortas = numPortas
    }

    public acelerar():void {
        this.velocidade = this.velocidade + 10;
    }

    public parar():void {
        this.velocidade = 0
    }

    public velocidadeAtual():number {
        return this.velocidade
    }
}

let CarroA = new Carro('Veloster', 3)
console.log(CarroA)
CarroA.acelerar()
console.log(CarroA)
CarroA.acelerar()
console.log(CarroA)
CarroA.acelerar()