import numberCruncher from "../../src/modules/calculation/numberCruncher";
import percentage from "../../src/modules/calculation/util/percentage";
import gcd from "../../src/modules/calculation/util/gcd";
import exp from "../../src/modules/calculation/util/exp";

describe("gcd tests", function() {
    it("should result in 1 when given 4 and 5", function() {
        const calcObject = { numOne: 4, numTwo: 5, operator: "gcd" };
        const result = numberCruncher(calcObject);
        expect(gcd(4, 5)).toBe(1);
    });

})

describe("exponent tests", function() {
    it("should result in 125 when given 5 and 3", function() {
        const calcObject = { numOne: 5, numTwo: 3, operator: "exp" };
        const result = numberCruncher(calcObject);
        expect(exp(5, 3)).toBe(125);
    });

})

describe("percentage tests", function() {
    it("should result in 50 when given 3 and 6", function() {
        const calcObject = { numOne: 3, numTwo: 6, operator: "percentage" };
        const result = numberCruncher(calcObject);
        expect(percentage(3, 6)).toBe(50);
    });
    
    it("should result in -1 when given -1 and 100", function() {
        const calcObject = { numOne: -1, numTwo: 100, operator: "percentage" };
        const result = numberCruncher(calcObject);
        expect(result).toBe(-1);
    });

    it("should result in Infinity when given 1 and 0", function() {
        const calcObject = { numOne: 1, numTwo: 0, operator: "percentage" };
        const result = numberCruncher(calcObject);
        expect(percentage(1, 0)).toBe(Infinity);
    });

    it("should result in 1000 when given 1000 and 100", function() {
        const calcObject = { numOne: 1000, numTwo: 100, operator: "percentage" };
        const result = numberCruncher(calcObject);
        expect(percentage(1000, 100)).toBe(1000);
    });
});
