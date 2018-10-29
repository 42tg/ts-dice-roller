import Dice from "./../src/index"

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
            dice = new Dice("1W10")
            expect(dice.toString()).toBe("1d10")
            expect(dice.count).toBe(1)
            expect(dice.eyes).toBe(10)
        })
        test("2W6", () => {
            dice = new Dice("2W6")
            expect(dice.toString()).toBe("2d6")
            expect(dice.count).toBe(2)
            expect(dice.eyes).toBe(6)
        })
        test("2W10", () => {
            dice = new Dice("2W10")
            expect(dice.toString()).toBe("2d10")
            expect(dice.count).toBe(2)
            expect(dice.eyes).toBe(10)
        })
        test("2W10+2", () => {
            dice = new Dice("2W10+2")
            expect(dice.toString()).toBe("2d10+2")
            expect(dice.count).toBe(2)
            expect(dice.eyes).toBe(10)
            expect(dice.base).toBe(2)
        })
    })
})
