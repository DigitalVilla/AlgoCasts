// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  const chunked = []

  while (arr.length) {
    chunked.push(arr.splice(0, size))
  }

  return chunked
}

function chunks(arr, size) {
  const chunked = []
  let temp = []

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i])
    if (temp.length === size) {
      chunked.push(temp)
      temp = []
    }
  }

  if (temp.length) chunked.push(temp)

  return chunked
}

module.exports = chunk
