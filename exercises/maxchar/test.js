const maxChar = require('./index')

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function')
})

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a')
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a')
  expect(maxChar('abccdefghijklmn')).toEqual('c')
  expect(maxChar('abccdeeefghijklmn')).toEqual('e')
})

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1')
  expect(maxChar('2ab1c22d1e12f12g')).toEqual('2')
  expect(maxChar('ffffffffffd1e12f12g')).toEqual('f')
  expect(maxChar('ffd1eeeeeeeee12f12g')).toEqual('e')
})
