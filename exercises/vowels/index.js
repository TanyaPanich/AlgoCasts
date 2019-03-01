// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => str
    .toLowerCase()
    .split('')
    .filter(ch =>
    ch === 'a' ||
    ch === 'e' ||
    ch === 'i' ||
    ch === 'o' ||
    ch === 'u'
  ).length

const vowels1 = (str) => {
  let count = 0
  //const checker = 'aeiou'
  //const checker = ['a', 'e', 'i', 'o', 'u', 'abc', 'tanya']
  const checker = ['a', 'e', 'i', 'o', 'u']
  for (let ch of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }
  return count
}

const vowels2 = str => {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}
module.exports = vowels;
