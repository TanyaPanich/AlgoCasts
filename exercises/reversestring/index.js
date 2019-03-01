// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


const reverse = str => {
  return str.split('').reverse().join('')
}

const reverse2 = str => {
  if (str.length <= 1) return str
  let reversed = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i)
  }
  return reversed
}

function reverse3 (str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  } //moloko m  om  lom olom kolom okolom
  return reversed
}

function reverse4 (str) {
  // debugger
  return str.split('').reduce((rev, char) => char + rev, '')
}

// reverse('asdf')
module.exports = reverse
