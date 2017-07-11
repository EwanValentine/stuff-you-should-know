const DATA = [1, 4, 6, 8, 3, 9, 2, 7, 5]

/**
 * sort
 *
 * @param   {Array} data
 * @returns {Array}
 */
const sort = data => {
  let n = data.length,
    swapped = true

  do {
    swapped = false
    for (let i = 0; i < n - 1; i++) {
      if (data[i] > data[i + 1]) {
        let temp = data[i]
        data[i] = data[i + 1]
        data[i + 1] = temp

        swapped = true
      }
    }
    n = n - 1
  } while (swapped)

  return data
}

console.log(sort(DATA))
