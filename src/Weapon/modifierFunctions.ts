import Dice from "../Dice"

export const Sharp = (x: number) => value => {
    if (value < x) return x
    return value
}

export const Crit = (x: number, dice: Dice) => value => {
    if (value === dice.eyes) return value + x
    return value
}

export const Exact = (
    x: number = 0,
    dice: Dice,
    generatorFunction: any = undefined
) => value => {
    const extraRolls = new Dice(x, dice.eyes).roll(generatorFunction)
    extraRolls.push(value)
    return extraRolls.reduce((prev, cur) => {
        if (prev > cur) return prev
        return cur
    }, 0)
}
