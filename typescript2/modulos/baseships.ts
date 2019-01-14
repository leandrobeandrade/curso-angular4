class Spacecrafts {
  constructor(public propulsor: string) {}

  jumpIntoHyperspace() {
    console.log(`Entering hyperspace with: ${this.propulsor}`)
  }
}

interface ContainerShips {
  cargoContainers: number
}

export {Spacecrafts, ContainerShips}
  