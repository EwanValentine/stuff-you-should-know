const swap = (items, first, second) => {
  let temp = items[first]
  items[first] = items[second]
  items[second] = temp
  return items
}

const partition = (items, left, right) => {

  // Pivot value is the right position + the left position, divided by 2
  const pivot = items[Math.floor((right + left) / 2)]
  let i = left, j = right

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      items = swap(items, i, j)
      i++
      j--
    }
  }

  return i
}

const quicksort = (items, left, right) => {
  let index

  if (items.length > 1) {
    index = partition(items, left, right)

    if (left < index - 1) {
      quicksort(items, left, right)
    }

    if (index < right) {
      quicksort(items, left, right)
    }
  }

  return items
}
