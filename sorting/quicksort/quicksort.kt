package sorting.quicksort

fun swap(items: Array<Int>, first: Int, second: Int): Array<Int> {
  var temp = items[first]
  items[first] = items[second]
  items[second] = temp
  return items
}

fun quicksort(items: Array<Int>, left: Int?, right: Int?): Array<Int> {
  var index
  val n = items.count

  if (n > 1) {
    
  }
}

fun main(args: Array<String>) {
  val items = arrayOf(1, 9, 2, 8, 3, 7, 4, 6, 5)

  val result = quicksort(items)
}
