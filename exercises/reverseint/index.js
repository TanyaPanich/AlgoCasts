// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  console.log("before" + n)

  // let str = n.toString() --> num to str
  // parseInt(myNumber.toString())  --> back to number
  // Math.sign(400) --> 1
  // Math.sign(-400) --> -1
  if (n === 0) return 0
  let str = n.toString()
  let isNegative = false

  if (Math.sign(n) === -1) {
    str = str.slice(1)
    isNegative = true
  }
  const revInt = parseInt(str.split('')
  .filter(char => char !== '0')
  .reverse()
  .join(''))
  
  console.log("revInt" + revInt)

  return isNegative ? -revInt : revInt

}

const reverseInt2 = n => {
  console.log("before" + n)

  const revInt = n
  .toString()
  .split('')
  .filter(char => char !== '0')
  .reverse()
  .join('')

  console.log("revInt" + revInt)
  return parseInt(revInt) * Math.sign(n)
}

// reverseInt(-765)
// reverseInt(5000)
//
// reverseInt2(-765)
// reverseInt2(5000)

module.exports = reverseInt
