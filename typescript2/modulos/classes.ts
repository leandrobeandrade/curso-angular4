import {Spacecrafts, ContainerShips} from './baseships'
import {MillenniumFalcons} from './starfighters'

let ships = new Spacecrafts('hyperdrive')
console.log(ships)
ships.jumpIntoHyperspace()


let falcons = new MillenniumFalcons()
falcons.jumpIntoHyperspace()


let goodForTheJobs = (ships: ContainerShips) => ships.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJobs(falcons) ? 'YES' : 'NO'}`)