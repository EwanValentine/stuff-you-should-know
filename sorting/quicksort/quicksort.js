/**
 * swap
 *
 * Takes an array, and two positions, swaps the
 * values in the array for those two positions.
 *
 * @param {Array}  items
 * @param {Number} first
 * @param {Number} second
 *
 * @returns {Array}
 */
const swap = (items, first, second) => {
  let temp = items[first]
  items[first] = items[second]
  items[second] = temp
  return items
}

/**
 * partition
 *
 * Take an array of items, including a left position
 * and a right position. Then iterate whilst the left position
 * is left than the right position.
 *
 * Each iteration, iterate whilst the items left value is less than the
 * pivot point. Secondly iterate whilst the items right value is greater
 * than the pivot point.
 *
 * Finally, if the left position is less than, or equal to the right position,
 * swap the left and the right values around, and increment the left position,
 * decrement the right position. Then we return the left position.
 *
 * @param {Array}  items
 * @param {Number} left
 * @param {Number} right
 *
 * @returns {Number}
 */
const partition = (items, left, right) => {

  // Pivot value is the right position + the left position, divided by 2
  const pivot = items[Math.floor((right + left) / 2)]

  // while index is less than or equal to the right position
  while (left <= right) {

    // While the item value at the left position
    // is less than the pivot point, increment.
    while (items[left] < pivot) {
      left++
    }

    // While the item value at the right position
    // is greater than the pivot point, decrement.
    while (items[right] > pivot) {
      right--
    }

    // If the left position  is less than or equal to
    // the right position
    if (left <= right) {
      items = swap(items, left, right)
      left++
      right--
    }
  }

  return left
}

/**
 * quicksort
 *
 * Quicksort takes an array of items, a left position and a right position.
 * The left and the right position can be nullable.
 *
 * First, we get the pivot point, then if the left position is less than the
 * pivot point, then we run the function again.
 *
 * Then, if the index is less than the right position, we do the same.
 *
 * @param {Array}  items
 * @param {Number} left
 * @param {Number} right
 *
 * @returns {Array}
 */
const quicksort = (items, left, right) => {
  let index

  if (items.length > 1) {

    left = typeof left != "number" ? 0 : left
    right = typeof right != "number" ? items.length - 1 : right

    // Get central position
    index = partition(items, left, right)

    // If left position is left than the index
    if (left < index - 1) {

      // Run function recursively with items, same position and
      // new index - 1
      quicksort(items, left, index - 1)
    }

    // If index is less than the right position
    if (index < right) {

      // Sort using items, current index, and given right position
      quicksort(items, index, right)
    }
  }

  return items
}

const result = quicksort([1, 9, 2, 8, 3, 7, 4, 6, 5])

console.log(result)
