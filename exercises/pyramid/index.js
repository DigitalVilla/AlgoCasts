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

function pyramid(n) {
  const len = n * 2 - 1
  const arr = Array(len).fill(' ')
  let steps = 1

  for (let i = Math.floor(len / 2), j = i; i >= 0 || j < len; i--, j++) {
    if (steps === 1) {
      arr[i] = '#'
    } else {
      arr[i] = '#'
      arr[j] = '#'
    }
    console.log(arr.join(''))
    steps++
  }
}

module.exports = pyramid

function pyramids(n) {
  let step = '#'
  for (let i = 1; i <= n; i++) {
    console.log(step.padStart(n, ' ') + step.padEnd(n, ' ').substr(1))
    step += '#'
  }
}

pyramid(4)
