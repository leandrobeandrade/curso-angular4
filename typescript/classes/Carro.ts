import Veiculo from './Veiculo'

export default class Carro extends Veiculo {
    private numPortas: number

    constructor(modelo: string, numPortas: number ) {               // pega parâmetros na instanciação do objeto
        super()                                                     // ajusta o contexto das variáveis    
        this.modelo = modelo
        this.numPortas = numPortas
    }

}