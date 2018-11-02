import rDice, {
    rWeapon,
    Standard,
    Sicherheit,
    Risiko,
    isPatzer,
    isTriumph
} from "../src"

describe("test", () => {
    test("ramda dice", () => {
        const result = rDice({ count: 1, eyes: 6 })
        expect(result.length).toBe(1)
    })

    test("replaced generator function", () => {
        const generator = jest.fn(() => 10)
        const result = rDice({ count: 100, eyes: 10, generator })
        expect(result.length).toBe(100)
        for (const value of result) {
            expect(value).toBe(10)
        }
    })
})

describe("weaponDice", () => {
    test(" create a weapon", () => {
        const result = rWeapon({ count: 3, eyes: 6 })
        expect(result.length).toBe(3)
    })
    test("exact function", () => {
        const generator = jest.fn(() => 10)
        rWeapon({ count: 3, eyes: 10, exact: 3, generator })
        expect(generator).toHaveBeenCalledTimes(12)
    })
    test("crit function", () => {
        const generator = jest.fn(() => 10)
        const result = rWeapon({ count: 3, eyes: 10, crit: 5, generator })
        for (const value of result) {
            expect(value).toBe(15)
        }
    })

    test("sharp function", () => {
        const generator = jest.fn(() => 1)
        const result = rWeapon({ count: 3, eyes: 10, sharp: 5, generator })
        for (const value of result) {
            expect(value).toBe(5)
        }
    })
})

describe("splittermond dices", () => {
    test("standard throw", () => {
        const result = Standard() //?
        expect(result.length).toBe(2)
    })
    test("sicherheit throw", () => {
        const result = Sicherheit() //?
        expect(result.length).toBe(2)
        for (const value of result) {
            expect(value.length).toBe(1)
        }
    })
    test("risiko throw", () => {
        const result = Risiko() //?
        expect(result.length).toBe(2)
        for (const value of result) {
            expect(value.length).toBe(2)
        }
    })
    describe("Triumph and Patzer", () => {
        test("test Patzer (1,1)", () => {
            const generator = jest.fn(() => 1)
            const result = Risiko(generator) //?
            expect(result.length).toBe(2)
            for (const value of result) {
                expect(isPatzer(value)).toBe(true)
                expect(value.length).toBe(2)
            }
        })

        test("test Patzer (2,1)", () => {
            const generator = jest.fn(() => 1).mockReturnValueOnce(2)
            const result = Risiko(generator) //?
            expect(result.length).toBe(2)
            for (const value of result) {
                expect(isPatzer(value)).toBe(true)
                expect(value.length).toBe(2)
            }
        })

        test("test triumph (10, 10)", () => {
            const generator = jest.fn(() => 10)
            const result = Risiko(generator) //?
            expect(result.length).toBe(2)
            for (const value of result) {
                expect(isTriumph(value)).toBe(true)
                expect(value.length).toBe(2)
            }
        })

        test("test triumph (10, 9)", () => {
            const generator = jest.fn(() => 10).mockReturnValueOnce(9)
            const result = Risiko(generator) //?
            expect(result.length).toBe(2)
            for (const value of result) {
                expect(isTriumph(value)).toBe(true)
                expect(value.length).toBe(2)
            }
        })

        test("not triumph", () => {
            const values = [2, 3]
        })
    })
})
