const sumOfOdd = require("./sumOfOdd");

test("3 numbers input", () => {
    expect(sumOfOdd([1, 2, 3])).toBe(4);
});

test ("4 negative numbers input", () => {
    expect(sumOfOdd([-1, -2, -3, -4])).toBe(-4);
})

test("2 negatives and 2 positives input", () => {
    expect(sumOfOdd([-3, -7, 3, 2])).toBe(-7);
})

test("-1 inputted", () =>{
    expect(sumOfOdd([-1])).toBe(-1);
})