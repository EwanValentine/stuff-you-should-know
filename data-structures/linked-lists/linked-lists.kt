package datastructures.linkedlists

class Node(data: String) {
  var data = data
  var next: Node? = null
}

class LinkedList {
  var head: Node? = null
  var length = 0

  fun add(data: String): Node {
    val node = Node(data)
    var currentNode = head

    if (currentNode == null) {
      head = node
      length++
      return node
    }

    while (currentNode != null && currentNode.next != null) {
      currentNode = currentNode.next
    }

    currentNode?.next = node

    length++

    return node
  }

  fun find(position: Int): Node? {
    var currentNode = head
    var count = 0

    if (length == 0 || position < 1 || position > length) {
      return null
    }

    while (count < position) {
      currentNode = currentNode?.next
      count++
    }

    return currentNode
  }
}

fun main(args: Array<String>) {
  val list: LinkedList = LinkedList()
  list.add("Ewan")
  list.add("Peter")
  list.add("Valentine")

  println(list.find(1)?.data)
}
