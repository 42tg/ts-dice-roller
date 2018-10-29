import Dice from "../index"

type RolledDice = { value: number; dice: Dice }

const MathRandom = (eyes: number) => Math.floor(Math.random() * eyes + 1)
class DiceRoll {
    dice: Dice
    rolls: Array<RolledDice>
    constructor(dice: Dice, generatorFunction: any = MathRandom) {
        this.dice = dice
        //@ts-ignore
        this.rolls = new Array(dice.count).fill().map(() => {
            return {
                value: generatorFunction(dice.eyes),
                dice: dice
            }
        })
        this.rolls //?

        return this
    }
}

export default DiceRoll
