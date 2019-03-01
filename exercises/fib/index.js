// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib1(n) {
  let result = [0, 1]
  for (let i = 2; i <= n; i++) {
    let x = result[i - 2]
    let y = result[i - 1]
    result.push(x + y)
  }
  console.log(result)
  return result[n]
}

//fn is slowFib function
// function memoize(fn) {
//   const cache = {}
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args]
//     }
//     const result = fn.apply(this, args)
//     cache[args] = result
//     return result
//   }
// }
//
// function slowFib(n) {
//   if (n < 2) return n
//   return fib(n - 1) + fib(n - 2)
// }

//const fib = memoize(slowFib)
//better to do like that:
//fib = memoize(fib)
//so, fib calls inside slowfib are referenced memoize(fib)
function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

function fib(n) {
  if (n < 2) return n
  return fib(n-1) + fib(n-2)
}

fib = memoize(fib)

module.exports = fib;
