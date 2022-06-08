const sumCharacter = require("./sumCharStr");


console.log(sumCharacter("hellllooooo"));
test("stringlength must be equal to 1 or less than 10", () => {
  const value = 'hellloooo'
  expect(sumCharacter(value)).toBeGreaterThanOrEqual(1);
  expect(sumCharacter(value)).toBeLessThan(10);
});
