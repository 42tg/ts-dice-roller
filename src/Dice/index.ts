import { MathRandom } from "./generatorFunctions"

class Dice {
    count: number
    eyes: number

    constructor(count: number = 1, eyes: number = 6) {
        this.count = count
        this.eyes = eyes
    }

    roll(generatorFunction: Function = MathRandom) {
        return new Array(this.count)
            .fill(null)
            .map(() => generatorFunction(this.eyes))
    }

    toString() {
        return `${this.count}d${this.eyes}`
    }
}

export default Dice
