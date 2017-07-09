// Linked Lists

/** 
 * LinkedList
 */
function LinkedList() {
  this.head = null
  this._length = 0
}

/**
 * Node
 *
 * @param {Any?} data
 */
function Node(data) {
  this.data = data  
  this.next = null
}

/**
 * add 
 *
 * Adds a new node into the list.
 *
 * @param  {Any?} value
 * @return {Node}
 */
LinkedList.prototype.add = function(value) {

  // Create a new node
  const node = new Node(value)

  // Set the head (first node) as the current node
  let currentNode = this.head

  // If the current node is null
  if (!currentNode) {

    // Set the head to the new node
    this.head = node

    // Iterate the length
    this._length++

    // Return instance of new node
    return node
  }
  
  // While current node next is set, iterate
  while (currentNode.next) {

    // Set the current node to the next node to create 'space'
    // for the new node.
    currentNode = currentNode.next
  }

  // Then set the next node to the newly created node
  currentNode.next = node

  // Up the length
  this._length++

  return node
}

/**
 * find
 *
 * Iterates over all of the nodes until 
 * the given position, and returns the node
 * in that position.
 *
 * @param  {Number} position
 * @return {Node}
 */
LinkedList.prototype.find = function(position) {
  let currentNode = this.head
  const length = this._length
  let count = 0

  // If the length of the tree is 0
  // or the position is less than 1
  // or if the position is greater than the length.
  if (length === 0 || position < 1 || position > length) {
    throw new Error('Node not found')
  }

  // Iterate through each node whilst the current
  // position is less than the given position.
  while (count < position) {
    currentNode = currentNode.next
    count++
  }

  return currentNode
}

LinkedList.prototype.remove = function(position) {
  let currentNode = this.head
  const length = this._length
  let count = 0
  let deleted = null
  
  if (position < 0 || position > length) {
    throw new Error('Not found')
  }

  if (position === 1) {
    this.head = currentNode.next
    deleted = currentNode
    currentNode = null
    this._length--

    return deletedNode
  }

  if (count < position) {
    beforeNodeToDelete = currentNode
    nodeToDelete = currentNode.next
    count++
  }

  beforeNodeToDelete.next = nodeToDelete.next
  deleted = nodeToDelete
  nodeToDelete = null
  this._length--

  return deleted
}

const list = new LinkedList()
list.add("Ewan")
list.add("Peter")
list.add("Valentine")

console.log(list.find(1).data)

list.remove(2)

console.log(list.find(2).data)

console.log(list)
