import * as R from "ramda"
import { MathRandom } from "./Dice/generatorFunctions"
import { Crit, Exact, Sharp } from "./Weapon/modifierFunctions"

const createArray = (count: number, eyes: number): number[] =>
    //@ts-ignore
    new Array<Number>(count).fill(eyes)

interface Dice {
    count: number
    eyes: number
    generator?
}

const rDice = ({ count, eyes, generator = MathRandom }: Dice): number[] =>
    R.map<Number, number>(generator)(createArray(count, eyes))

interface Weapon extends Dice {
    exact?: number
    crit?: number
    sharp?: number
}

export const rWeapon = ({
    count,
    eyes,
    generator = MathRandom,
    exact = 0,
    crit = 0,
    sharp = 0
}: Weapon) =>
    R.map(
        R.pipe(
            Exact(exact, eyes, generator),
            Crit(crit, eyes),
            Sharp(sharp)
        )
    )(rDice({ count, eyes, generator }))

const isGreater = (a: number, b: number): number => b - a

export const Standard = (generator: Function = MathRandom): number[] =>
    rDice({ eyes: 10, count: 2, generator })
export const Sicherheit = (
    generator: Function = MathRandom
): [number[], number[]] =>
    R.splitAt(1, R.sort(isGreater, rDice({ eyes: 10, count: 2, generator })))
export const Risiko = (
    generator: Function = MathRandom
): [number[], number[]] =>
    R.splitAt(2, R.sort(isGreater, rDice({ eyes: 10, count: 4, generator })))

const getFirstTwo = (rolled: number[]): number => R.sum(R.take(2)(rolled))
export const isPatzer = (rolled: number[]) => R.lte(getFirstTwo(rolled))(3)
export const isTriumph = (rolled: number[]) => R.gte(getFirstTwo(rolled))(19)

export default rDice
