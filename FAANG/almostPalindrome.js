'use strict'

function almostPalindrome(s) {
  if (!s) return false

  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let l = 0,
    r = str.length - 1

  while (l <= r) {
    if (str[l] !== str[r]) {
      return (
        isPalindrome(str.substr(0, l) + str.substr(l + 1)) ||
        isPalindrome(str.substr(0, r) + str.substr(r + 1))
      )
    }

    l++
    r--
  }

  return true
}

function isPalindrome(str) {
  if (!str) return false

  let l = 0,
    r = str.length - 1

  while (l <= r) {
    if (str[l++] !== str[r--]) return false
  }

  return true
}

console.log(almostPalindrome('abccdba'))
console.log(almostPalindrome('race a car'))
console.log(almostPalindrome('abcdefdba'))
