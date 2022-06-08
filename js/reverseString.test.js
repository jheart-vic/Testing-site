const reverseString = require("./reverseString")
test('please properly reverse the string', () =>{
  const res = reverseString('hello')
  expect(res).toBe('olleh')
})