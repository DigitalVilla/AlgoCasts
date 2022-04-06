'use strict'

// given an array of integers, return the indices of the 2 numbers hat add up to a value

function twoSum(arr, target) {
  const match = {}

  for (let i = 0; i < arr.length; i++) {
    if (match[arr[i]] >= 0) {
      return [match[arr[i]], i]
    }

    match[target - arr[i]] = i
  }

  return []
}

console.log(twoSum([1, 3, 7, 9, 2], 11))
console.log(twoSum([1, 3, 7, 9, 2, 4], 11))
console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [1,2]
