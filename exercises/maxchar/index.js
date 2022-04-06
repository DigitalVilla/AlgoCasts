// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const max = { count: 0, char: '' }
  const c = {}

  for (let i = 0; i < str.length; i++) {
    c[str[i]] = c[str[i]] + 1 || 1

    // c[str[i]] = c[str[i]] ? c[str[i]] + 1 : 1

    // if (c[str[i]]) c[str[i]]++
    // else c[str[i]] = 1

    if (c[str[i]] > max.count) {
      max.char = str[i]
      max.count = c[str[i]]
    }
  }

  return max.char
}

module.exports = maxChar
