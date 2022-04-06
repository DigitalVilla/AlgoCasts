function countIslands(map) {
  let count = 0

  const comp = {}

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        comp[i] = comp[i] || {}
        comp[i][j] = 1

        count++
        if (comp[i][j - 1])  count--
        else if {
            count--
        }

         && comp[i - 1] && comp[i - 1][j]) {
          count--
        }
      }
      i > 1 && console.log(comp, count)
    }
    console.log('--------')
    console.log(i)
    console.log('--------')
  }

  console.log(comp)

  return count
}

console.log(
  countIslands([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
  ])
)
