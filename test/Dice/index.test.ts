import Dice from "./../../src/Dice"
describe("Dice test", () => {
    test("creation", () => {
        const dice = new Dice()
    })

    describe("internal functions", () => {
        let dice
        beforeEach(() => {
            dice = new Dice()
        })
        test("rolling a Dice ", () => {
            const result = dice.roll()
            expect(result).not.toBeUndefined()
        })
    })

    describe("diceNotation Parsing", () => {
        let dice
        test("defaultdice", () => {
            dice = new Dice()
            expect(dice.toString()).toBe("1d6")
            expect(dice.count).toBe(1)
            expect(dice.eyes).toBe(6)
        })
        test("W10", () => {
            dice = new Dice(1, 10)
            expect(dice.toString()).toBe("1d10")
            expect(dice.count).toBe(1)
            expect(dice.eyes).toBe(10)
        })
        test("2W6", () => {
            dice = new Dice(2, 6)
            expect(dice.toString()).toBe("2d6")
            expect(dice.count).toBe(2)
            expect(dice.eyes).toBe(6)
        })
        test("2W10", () => {
            dice = new Dice(2, 10)
            expect(dice.toString()).toBe("2d10")
            expect(dice.count).toBe(2)
            expect(dice.eyes).toBe(10)
        })
    })

    test("test rolls", () => {
        const generatorFunction = jest.fn().mockReturnValue(1)
        const dice = new Dice(10, 10)
        const diceRolls = dice.roll(generatorFunction)
        expect(diceRolls.length).toBe(10)
        diceRolls.forEach(item => {
            expect(item).toBe(1)
        })
    })

    test("propability map", () => {
        const eyes = 10
        const count = 1000
        //@ts-ignore
        let propability = new Array(eyes).fill(0)
        const dice = new Dice(1, eyes)
        for (let i = 0; i < count; i++) {
            const roll = dice.roll()
            propability[roll.pop() - 1]++
        }
        propability = propability.map(value => value / count)
        propability //?
    })
})
