import {Spacecrafts, ContainerShips} from './baseships'

class MillenniumFalcons extends Spacecrafts implements ContainerShips {
  cargoContainers: number

  constructor() {
    super('hyperdrive')
    this.cargoContainers = 3
  }

  jumpIntoHyperspace() {
    if(Math.random() >= 0.5) {
      super.jumpIntoHyperspace()
    } else {
      console.log('Failed to jump into hyperspace')
    }
  }
}

export {MillenniumFalcons}
