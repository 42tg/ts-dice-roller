import Dice from "../Dice"
import { Crit, Exact, Sharp } from "./modifierFunctions"

interface WeaponAttributes {
    readonly crit?: number
    readonly sharp?: number
    readonly exact?: number
}

class Weapon extends Dice {
    attributes: WeaponAttributes
    constructor(count: number, eyes: number, attributes: WeaponAttributes) {
        super(count, eyes)
        this.attributes = attributes
    }

    roll(generatorFunction: any = undefined) {
        const roll = super.roll(generatorFunction)

        return roll
            .map(Exact(this.attributes.exact, this, generatorFunction))
            .map(Crit(this.attributes.crit, this))
            .map(Sharp(this.attributes.sharp))
    }
}

export default Weapon
