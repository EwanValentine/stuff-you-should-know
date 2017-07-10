package doubly.linked.lists

class DoublyLinkedList {
  length = 0
  head = : Node? = null
  tail = : Node? = null

  fun add(value) {
    val node = Node(value)
  }

  fun remove(position: Int) {}

  fun find(position: Int) {}
}

class Node(data: String) {
  var next : Node? = null
  var previous : Node? = null
  var data = data
}

fun main(args: Array<String>) {
  
}
