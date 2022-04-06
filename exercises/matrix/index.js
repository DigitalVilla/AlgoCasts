// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //   const x = Array(n).fill([])
  const x = Array.from({ length: n }, (i) => [])
  let x1 = 0,
    y1 = 0,
    x2 = n - 1,
    y2 = n - 1,
    counter = 1

  while (y1 <= y2 && x1 <= x2) {
    for (let i = y1; i <= y2; i++) {
      x[x1][i] = counter
      counter++
    }
    x1++
    // break
    for (let i = x1; i <= x2; i++) {
      x[i][y2] = counter
      counter++
    }
    y2--
    for (let i = y2; i >= y1; i--) {
      x[x2][i] = counter
      counter++
    }
    x2--
    for (let i = x2; i >= x1; i--) {
      x[i][y1] = counter
      counter++
    }
    y1++
  }

  console.log({ x })
  return x
}

matrix(5)
module.exports = matrix
