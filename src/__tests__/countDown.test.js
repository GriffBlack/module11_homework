import {countDown} from '../countDown'

describe("test countDown value", () => {
    it("Positive number", () => {
        expect(countDown(5)).toBe("5 4 3 2 1");
    }),
        it("Negative number", () => {
            expect(countDown(-2)).toBe("-2 -1");
    }),
        it("Null number", () => {
            expect(countDown(0)).toBe("0");
    }),
        it("NaN", () => {
            expect(countDown(NaN)).toBe("it's NaN");
    }),
        it("Строка", () => {
            expect(countDown("string")).toBe("Это не число!");
    })
})