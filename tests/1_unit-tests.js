const chai = require("chai");
const assert = chai.assert;

const Solver = require("../controllers/sudoku-solver.js");
let solver;

suite("UnitTests", () => {
  suite("Testing puzzle", function () {
    test("valid puzzle string of 81 characters", function () {});
    test("puzzle string with invalid characters (not 1-9 or .)", function () {});
    test("puzzle string that is not 81 characters in length", function () {});
  });

  suite("Testing row", function () {
    test("valid row placement", function () {});
    test("invalid row placement", function () {});
  });

  suite("Testing column", function () {
    test("valid column placement", function () {});
    test("invalid column placement", function () {});
  });

  suite("Testing region", function () {
    test("a valid region (3x3 grid) placement", function () {});
    test("invalid region (3x3 grid) placement", function () {});
  });

  suite("Testing solver", function () {
    test("valid puzzle strings pass the solver", function () {});
    test("invalid puzzle strings fail the solver", function () {});
    test("solver returns the expected solution for an incomplete puzzle", function () {});
  });
});
