// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  let obj = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (obj[char]) {
      obj[char] ++
    } else {
      obj[char] = 1
    }
  }

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char]
      maxChar = char
    }
  }
  return maxChar
}

// const maxChar = (str) => {
//
//   let obj = {}
//   let max = 0
//   let maxchar = ''
//
//   for (let char of str) {
//     if (obj[char]) {
//       obj[char]++
//       if (obj[char] > max && char !== maxchar ) {
//         maxchar = char
//         max = obj[char]
//       }
//     } else {
//       obj[char] = 1
//       if (max === 0) {
//         maxchar = char
//         max = obj[char]
//       }
//     }
//   }
//   return maxchar
// }

module.exports = maxChar
