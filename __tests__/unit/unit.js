import numberCruncher from "../../src/modules/calculation/numberCruncher";

describe("numberCruncher tests", function () {
  // Functional test
  it("should return 9 when adding 2 and 7", function () {
    const calcObject = { numOne: 2, numTwo: 7, operator: "add" };
    const result = numberCruncher(calcObject);
    expect(result).toBe(9);
  });
});

describe("numberCruncher tests", function () {
    it("should return 6 when subtracting 9 from 3", function () {
        const calcObject = { numOne: 9, numTwo: 3, operator: "subtract"};
        const result = numberCruncher(calcObject);
        expect(result).toBe(6);
    });
})

describe("numberCruncher tests", function () {
    it("should return 24 when multiplying 6 and 4", function () {
        const calcObject = { numOne: 6, numTwo: 4, operator: "multiply"};
        const result = numberCruncher(calcObject);
        expect(result).toBe(24);
    });
})

describe("numberCruncher tests", function () {
    it("should return 1 when multiplying 10 and 10", function () {
        const calcObject = { numOne: 10, numTwo: 10, operator: "divide"};
        const result = numberCruncher(calcObject);
        expect(result).toBe(1);
    });
})