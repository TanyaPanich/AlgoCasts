// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams1 = (stringA, stringB) => {
  const objA = makeObj(stringA)
  const objB = makeObj(stringB)
  if (Object.keys(objA).length != Object.keys(objB).length) return false
  for (let char in objA) {
    if (objA[char] !== objB[char]) return false
  }
  return true
}

const makeObj = (str) => {
  let obj = {}
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    obj[char] = obj[char]++ || 1
  }
  return obj
}

const anagrams = (stringA, stringB) => {

  const sortedA = stringA
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('')

  const sortedB = stringB
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('')

return sortedA === sortedB

}

anagrams('rail safety', 'fairy tales')

module.exports = anagrams;
