// given a stirng return if it sis a palindrome

function isPalindromesr(str) {}
function isPalindromed(s) {
  if (!s) return false

  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let l = 0,
    r = str.length - 1

  while (l <= r) {
    if (str[l++] !== str[r--]) return false
  }

  return true
}

var isPalindromeFast = function (str) {
  if (!str) return false
  return (
    str
      .replace(/[^a-zA-Z0-9]/g, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('') === str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  )
}

// console.log(isPalindrome(''))
// console.log(isPalindrome('  @$$#@$@#$@ 22  '))
// console.log(isPalindrome('A man, a plan. A canal: Panama!'))
// console.log(isPalindrome('!!!!!!!!a!!!!!a!!!'))
// console.log(isPalindrome('ab_a'))
console.log(
  isPalindromed(
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!b!!!!!a!!!!!a!!!b!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
  )
)

// while (l <= r) {
//     next = false
//     a = /^\w$/.test(str[l]) && str[l].toLowerCase()
//     b = /^\w$/.test(str[r]) && str[r].toLowerCase()
//     console.log(a, b)
//     if (!a) {
//       next = true
//       l++
//     }
//     if (!b) {
//       next = true
//       r--
//     }
//     if (!next) {
//       if (a !== b) return false
//       l++
//       r--
//     }
//   }
