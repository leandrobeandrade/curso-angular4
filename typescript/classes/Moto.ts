import Veiculo from './Veiculo'

class Moto extends Veiculo {
    
    public acelerar():void {
        this.velocidade = this.velocidade + 50                  // sobrescreveu o método acelerar da classe Veiculo
    }
}

export default Moto