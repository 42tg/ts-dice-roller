import DiceRoll from "./DiceRoll"

const regex = new RegExp(/^(\d+)[wd](\d+)(?:|([+\-*\/])(\d))$/i)

class Dice {
    notation: RegExpExecArray
    count: number
    eyes: number

    operant: string
    base: number

    constructor(diceNotation: string = "1W6") {
        this.notation = regex.exec(diceNotation)
        this.notation //?
        if (this.notation === null) throw new Error("Could not parse Input")

        this.count = parseInt(this.notation[1], 10)
        this.eyes = parseInt(this.notation[2], 10)

        this.operant = this.notation[3] || `+`
        this.base = parseInt(this.notation[4], 10) || 0
    }

    roll = () => {
        return new DiceRoll(this.count, this.eyes)
    }

    toString = () => {
        return (
            `${this.count}d${this.eyes}` +
            (this.base ? `${this.operant}${this.base}` : ``)
        )
    }
}

export default Dice
