# Calc library API

NB: Remember to write tests before the functions are written, so that you can check the tests should fail if there is no implementation. If they pass, something is wrong.

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum of given numbers or

- if a parameter is missing, throws an exception : `'parameter missing'`
- if parameters are not numbers, throw an exception : `'only numbers allowed'`
-

### Test Cases

#### Sum

##### Integers

- sum(1,1) returns 2
- sum(2, 3) returns 5
- sum(-2, -4) returns -6
- sum(-2, 4) returns 2
- sum(4, -3 returns 1
  a, b, expected
  [2, -4, -2],
  [0, 0, 0],
  [0, 3, 3],
  [3, 0, 3],
  [0, -3, -3]
  [-3, 0, -3]

##### Floats

[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[-3, 2.5, -0.5],
[-2.5, 2.5, -5],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1],

#### Missing parameters

sum() throws an exception `'paramter missing'`
sum(1) throws an exception `'paramter missing'`
sum('a') throws an exception `'paramter missing'`
sum('') throws an exception `'paramter missing'`


#### Paramters are not numbers
