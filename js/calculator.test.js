// const { describe } = require("yargs")
const Calculator = require("./calculator")

describe('calculator', () =>{
  test('addition', () =>{
  // arrange
  const calc = new Calculator();
  // acts
   const add = calc.add(3,4)
  // asserts
  expect(add).toBe(7)
  })
  test('subtraction', () =>{
  // arrange
  const calc = new Calculator();
  // acts
   const subtract = calc.subtract(6,4)
  // asserts
  expect(subtract).toBe(2)
  })
  test('multiplication', () =>{
  // arrange
  const calc = new Calculator();
  // acts
   const multiply = calc.multiply(6,4)
  // asserts
  expect(multiply).toBe(24)
  })
  test('division', () =>{
  // arrange
  const calc = new Calculator();
  // acts
   const divide = calc.divide(6,2)
  // asserts
  expect(divide).toBe(3)
  })
})