/* eslint-disable space-before-function-paren */
import findOdd from "../src/main";

/**
 * test cases
 * [] => ERROR
 * [0] => 0
 * [7] => 7
 * [1,1,2] => 2
 * [4,1,2,1,2] => 4
 * [1,1] => -1
 * [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5] => 5
 */

describe("findOdd should", () => {
  it("give number when array contains just one number", () => {
    expect(findOdd([0])).toBe(0);
    expect(findOdd([7])).toBe(7);
  });

  it("Raise error when array is not accepted", () => {
    expect(() => findOdd([])).toThrow();
  });

  it("gives number that has an odd number of ocurrences", () => {
    expect(findOdd([1, 1, 2])).toBe(2);
    expect(findOdd([4, 1, 2, 1, 2])).toBe(4);
    expect(findOdd([1, 1, 2, -2, 2, 4, 4, -1, -1, -2, 5])).toBe(5);
  });

  it("give none when no number is odd", () => {
    expect(findOdd([1, 1])).toBe(null);
  });
});

describe("Example tests", function () {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
  doTest([10], 10);
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});

function doTest(a: number[], n: number) {
  it(`xs = ${JSON.stringify(a)} ; n = ${n}`, () => {
    expect(findOdd(a)).toEqual(n);
  });
}
