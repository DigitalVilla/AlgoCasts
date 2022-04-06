/**
 * Find the median of 2 sorted arrays
 * @param {Array} a
 * @param {Array} b
 */
function median(a, b) {
  //   const newArr = [...a, ...b].sort() // complexity O n log n
  const newArr = concatArr(a, b) // complexity n
  const mid = Math.floor(newArr.length / 2)

  if (newArr.length % 2 === 0) {
    return (newArr[mid] + newArr[mid - 1]) / 2
  } else {
    return newArr[mid]
  }
}

function concatArr(A, B) {
  const newArr = []

  let a = 0,
    b = 0

  while (a < A.length || b < B.length) {
    if (A[a] < (B[b] ?? Infinity)) {
      newArr.push(A[a++])
    } else if (B[b] < (A[a] ?? Infinity)) {
      newArr.push(B[b++])
    } else if (A[a] !== undefined && B[b] !== undefined) {
      newArr.push(B[b++])
      newArr.push(A[a++])
    }
  }

  return newArr
}

console.log([0, 1, 0, 0, 0, 10].sort())
console.log(
  concatArr([0, 0, 1, 1, 1, 1, 1, 1, 1], [-1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10])
)

// console.log(median([1, 3, 5], [2, 4, 6]))
// console.log(median([0, 0, 0], [0, 0, 10]))
