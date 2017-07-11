package sorting.bubblesort

fun main(args: Array<String>) {
  val data: IntArray = intArrayOf(1, 4, 6, 8, 3, 9, 2, 7, 5)
  Sort(data)
}

fun Sort(data: IntArray) {
  var n = data.size
  var swapped = true

  while (swapped) {
    swapped = false

    var i = 0
    while (i < n - 1) {
      if (data[i] > data[i + 1]) {
        var temp = data[i]
        data[i] = data[i + 1]
        data[i + 1] = temp
        swapped = true
      }
      i++
    }
    n = n - 1
  }

  for (value in data) {
    println(value)
  }
}
