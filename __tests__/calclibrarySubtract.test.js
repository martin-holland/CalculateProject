"use strict";

const { subtract } = require("../calclibrary");

describe("test subtract with integers", () => {
  const testValues = [
    [1, 1, 0],
    [2, 3, -1],
    [-2, -4, 2],
    [0, 0, 0],
    [3, 0, 3],
    [0, 3, -3],
  ];
  test.each(testValues)("subtract(%s,%s)=%s", (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected);
  });
});

describe("test subtract with floats", () => {
  const testValues = [
    [10, 11.5, -1.5],
    [-2.5, 3, -5.5],
    [2.5, 2.5, 0],
    [2.4, -2.5, 4.9],
  ];

  test.each(testValues)("subtract(%s,%s)=%s", (a, b, expected) => {
    expect(subtract(a, b)).toBeCloseTo(expected);
  });
});

describe("test missing parameters throw an exception", () => {
  test('sum() throws an exception "parameter missing"', () => {
    expect(() => sum()).toThrow("parameter missing");
  });

  const testValues = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];
  test.each(testValues)(
    'subtract(%s) throws an exception: "%s"',
    (a, expected) => {
      expect(() => sum(a)).toThrow(expected);
    }
  );

  const testValueVersion2 = [[null], [1], ["a"], [""]];

  test.each(testValueVersion2)(
    'sum(%s) throws an exception: "parameter missing"',
    (a) => {
      expect(() => sum(a)).toThrow("parameter missing");
    }
  );
});

describe("test Parameters are not numbers", () => {
  const testValues = [
    ["a", 1],
    [1, "a"],
    ["a", "b"],
    ["", ""],
    ["1", "2"],
  ];

  test.each(testValues)(
    'sum(%s,%s) throws exception:"only numbers allowed"',
    (a, b) => {
      expect(() => sum(a, b)).toThrow("only numbers allowed");
    }
  );
});
