'use strict'
// trappingWater

// given an array of ints representing an elevation map, where the width each is 1, return how much rainwater can be trapped

function trappingWater(arr) {
  let water = 0,
    a = 0,
    temp = 0,
    nextA = 0,
    b = arr.length - 1,
    nextB = arr.length - 1

  while (a < b) {
    if (arr[a] <= arr[b]) {
      nextA++

      if (arr[a] > arr[nextA]) {
        temp += arr[a] - arr[nextA]
      } else {
        water += temp
        temp = 0
        a = nextA
      }
    } else {
      nextB--

      if (arr[b] > arr[nextB]) {
        temp += arr[b] - arr[nextB]
      } else {
        water += temp
        temp = 0
        b = nextB
      }
    }
  }

  return water
}

var trap = function (height) {
  if (height.length === 0 || height.length === 1) {
    return null
  }

  let leftPointer = 0,
    rightPointer = height.length - 1,
    maxLeft = 0,
    maxRight = 0,
    total = 0
  while (leftPointer < rightPointer) {
    //when the left pointer is << we need to operate on that very pointer
    if (height[leftPointer] < height[rightPointer]) {
      if (maxLeft > height[leftPointer]) {
        let currentHeight = maxLeft - height[leftPointer]
        total += currentHeight
        leftPointer++
      } else {
        maxLeft = height[leftPointer]
        leftPointer++
      }
    } else {
      if (maxRight > height[rightPointer]) {
        let currentHeight = maxRight - height[rightPointer]
        total += currentHeight
        rightPointer--
      } else {
        maxRight = height[rightPointer]
        rightPointer--
      }
    }
  }
  return total
}

console.log(
  trappingWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]) // 8
)
