'use strict'

// given an arr of integers where each represents the eight of a vertical line on a chart. find 2 lines which together with x axis formsa  container that would hold the greates ammount of water.
// Return the area of water it would hold

function waterContainer(arr) {
  let a = 0,
    area = -1,
    b = arr.length - 1

  while (a <= b) {
    area = Math.max(Math.min(arr[a], arr[b]) * (b - a), area)
    if (arr[a] <= arr[b]) a++
    else b--
  }
  return area
}

// function waterContainer(arr) {
//   let area = 0

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let a = Math.min(arr[i], arr[j]) * (j - i)
//       if (a > area) area = a
//     }
//   }

//   return area
// }

console.log(waterContainer([1, 8, 6, 2, 9, 4]))
console.log(waterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(waterContainer([2, 3, 4, 5, 18, 17, 6]))
