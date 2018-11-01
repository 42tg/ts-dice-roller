import Weapon from "../../src/Weapon"

describe("Weapon test", () => {
    test("construction", () => {
        const weapon = new Weapon(3, 6, {
            crit: 4,
            sharp: 3,
            exact: 3
        })
        const roll = weapon.roll()
        roll.forEach(element => {
            expect(element).not.toBeUndefined()
        })
    })

    test("correct crit function", () => {
        const weapon = new Weapon(100, 6, {
            crit: 4
        })
        const generator = jest.fn().mockReturnValue(6)
        const roll = weapon.roll(generator)
        roll.forEach(element => {
            expect(element).toBe(10)
        })
    })

    test("correct sharp function", () => {
        const weapon = new Weapon(100, 6, {
            sharp: 3
        })
        const generator = jest.fn().mockReturnValue(1)
        const roll = weapon.roll(generator)
        roll.forEach(element => {
            expect(element).toBe(3)
        })
    })

    test("Correct exact function", () => {
        const weapon = new Weapon(1, 6, {
            exact: 2
        })
        const generator = jest.fn().mockReturnValue(6)
        weapon.roll(generator)
        expect(generator).toBeCalledTimes(3)
    })
})
