"use strict";

function testAll(dataArray) {
  return function (message, callbackFunction) {
    for (let row of dataArray) {
      console.log(message);
      callbackFunction(...row);
    }
  };
}

const data = [
  [1, 2, 3],
  [4, 5, 6],
];

testAll(data)("xyz", (a, b, c) => console.log(a, b, c));
const a = testAll(data);
a("xyz", (a, b, c) => console.log(a, b, c));
