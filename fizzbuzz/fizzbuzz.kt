package fizz.buzz

fun main(args: Array<String>) {
  println("Hello world")
  FizzBuzz(100)
}

fun FizzBuzz(limit: Int) {
  var i = 0
  while(i < limit) {
    i++
    var output = ""

    if (i % 3 == 0) {
      output += "Fizz "
    }

    if (i % 5 == 0) {
      output += "Buzz"
    }

    if (output == "") {
      println(i)
      continue
    }

    println(output)
  }
}
