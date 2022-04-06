function flat(arr) {
  return arr.reduce((acc, el) => {
    if (!Array.isArray(el)) acc.push(el)
    else acc = acc.concat(flat(el))
    return acc
  }, [])
}

console.log(flat([1, 2, 3, [4, 5, 6]]))
