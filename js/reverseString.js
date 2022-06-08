function reverseString(string) {
   let stringReversed = string.split('').reverse().join('')
   return stringReversed;
}
module.exports = reverseString;