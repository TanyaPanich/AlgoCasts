// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid1(n) {
  const mid = Math.floor((2 * n - 1) / 2)

  for (let row = 0; row < n; row++) {
    let str = ''
    for (let column = 0; column < 2 * n - 1; column++) {
      if (mid - row <= column && mid + row >= column ) {
        str += '#'
      } else {
        str += ' '
      }
    }
    console.log(str)
  }
}

const pyramid2 = (n, row = 0, str = '') => {
  if (row === n) return
  if (str.length === 2 * n - 1) {
    console.log(str)
    return pyramid2(n, row + 1)
  }

  const mid = Math.floor((2 * n - 1) / 2)
  let add = ''
  if (mid - row <= str.length && mid + row >= str.length) {
    add += '#'
  } else {
    add += ' '
  }
  pyramid2(n, row, str + add)
}

const pyramid = (n, row = 0, str = '') => {
  if (row === n) return
  if (str.length === 2 * n - 1) {
    console.log(str)
    return pyramid(n, row + 1)
  }
  const mid = Math.floor((2 * n - 1) / 2)
  let add = ''
  if (mid - row <= str.length && mid + row >= str.length) {
    add += '#'
  } else {
    add += ' '
  }
  pyramid(n, row, str + add)
}
pyramid(3)
module.exports = pyramid
