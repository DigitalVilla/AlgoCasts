'use strict'

// given a string, find the length of the longest substring without repeating chars

function longestSubstring(str) {
  console.log()
  if (str.length <= 1) return str.length

  const map = {}
  let len = 0,
    left = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const seen = map[char]

    if (seen >= left) {
      left = seen + 1
    }
    map[char] = i
    len = Math.max(len, i - left + 1)
  }

  return len
}
function longestSubstrings(str) {
  console.log()
  if (str.length <= 1) return str.length

  let len = 0,
    map = ''

  for (let i = 0; i < str.length; i++) {
    const indx = map.indexOf(str[i])
    if (indx >= 0) {
      len = Math.max(map.length, len)
      map = map.substr(indx + 1)
    }
    map += str[i]
  }

  return Math.max(map.length, len)
}

function longestSubstringss(str) {
  if (str.length <= 1) return str.length

  let len = 0,
    map = ''

  for (let i = 0; i < str.length; i++) {
    if (map.indexOf(str[i]) < 0) {
      map += str[i]
    } else {
      len = Math.max(map.length, len)
      while (map.indexOf(str[i]) >= 0) {
        map = map.substr(1)
      }
      map += str[i]
    }
  }

  return Math.max(map.length, len)
}

console.log(longestSubstring('abccabb'))
console.log(longestSubstrings('abccabb'))
console.log(longestSubstring('pwwkew'))
console.log(longestSubstrings('pwwkew'))
console.log(longestSubstring('au'))
console.log(longestSubstrings('au'))
console.log(longestSubstring('dvdf'))
console.log(longestSubstrings('dvdf'))
console.log(longestSubstring(' '))
console.log(longestSubstrings(' '))
console.log(longestSubstring(''))
console.log(longestSubstrings(''))
