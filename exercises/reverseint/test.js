const reverseInt = require('./index')

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined()
})

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0)
})

test('ReverseInt flips a positive number', () => {
  expect(reverseInt(5)).toEqual(5)
  expect(reverseInt(15)).toEqual(51)
  expect(reverseInt(90)).toEqual(9)
  expect(reverseInt(2359)).toEqual(9532)
})
test('ReverseInt flips a positive float number', () => {
  expect(reverseInt(5.32)).toEqual(23.5)
  expect(reverseInt(15.02)).toEqual(20.51)
  expect(reverseInt(90.12)).toEqual(21.09)
  expect(reverseInt(23.59)).toEqual(95.32)
})

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5)
  expect(reverseInt(-15)).toEqual(-51)
  expect(reverseInt(-90)).toEqual(-9)
  expect(reverseInt(-2359)).toEqual(-9532)
})
