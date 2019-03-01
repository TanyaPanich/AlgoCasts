// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk1 = (array, size) => {
  let chunked = []

  for (let e of array) {
    let last = chunked[chunked.length -1]
    if (!last || last.length === size) {
      chunked.push([e])
    } else {
      last.push(e)
    }
  }
  return chunked
}

const chunk = (array, size) => {
  let chunked = []
  let i = 0
  while (i < array.length) {
    chunked.push(array.slice(i, i + size))
    i += size
    console.log('chunked', chunked)
  }
  return chunked
}

chunk([1, 2, 3, 4, 5], 2)
module.exports = chunk;
