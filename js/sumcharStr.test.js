const sumCharacter = require("./sumCharStr");

// test('correctly Sum the charcters of a string', () => {
//   expect(sumCharacter('hello')).toBe(5);
// })
console.log(sumCharacter("hellllooooo"));
test("stringlength must be equal to 1 or less than 10", () => {
  const value = 'hellloooo'
  console.log(value.length)
  // expect(sumCharacter('helll')).toBeWithinRange(1, 9);
  expect(sumCharacter(value)).toBeGreaterThanOrEqual(1);
  expect(sumCharacter(value)).toBeLessThan(10);
});
