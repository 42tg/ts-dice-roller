import * as R from "ramda"
import { MathRandom } from "./Dice/generatorFunctions"
import { Crit, Exact, Sharp } from "./Weapon/modifierFunctions"

//@ts-ignore
const createArray = (count: number, eyes: number) => new Array(count).fill(eyes)

const generator = (eyes: number) => MathRandom(eyes)

const rDice = (count: number, eyes: number, baseDamage: number = 0) =>
    R.sum(
        R.map(
            R.pipe(
                generator,
                Exact(3, eyes, generator),
                Crit(4, eyes),
                Sharp(3)
            )
        )(createArray(count, eyes))
    ) + baseDamage

const rolled = rDice(2, 10, 20)
console.log(rolled)
export default rDice
