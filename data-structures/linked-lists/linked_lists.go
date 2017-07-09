package main

import (
	"errors"
	"fmt"
	"log"
)

// ILinkedList -
type ILinkedList interface {
	Add(interface{}) *Node
	Find(int) *Node
}

type LinkedList struct {
	head   *Node
	length int
}

type Node struct {
	data interface{}
	next *Node
}

func NewLinkedList() *LinkedList {
	return &LinkedList{
		head:   nil,
		length: 0,
	}
}

func NewNode(data interface{}) *Node {
	return &Node{
		data: data,
		next: nil,
	}
}

func (list *LinkedList) Add(data interface{}) *Node {
	node := NewNode(data)

	currentNode := list.head

	if currentNode == nil {
		list.head = node
		list.length = list.length + 1

		return node
	}

	for currentNode.next != nil {
		currentNode = currentNode.next
	}

	currentNode.next = node

	list.length = list.length + 1

	return node
}

func (list *LinkedList) Find(position int) (*Node, error) {
	currentNode := list.head
	length := list.length
	count := 0

	if length == 0 || position < 1 || position > length {
		return nil, errors.New("Node not found")
	}

	// Iterate through each node, until
	// the node position matches the count
	for count < position {
		currentNode = currentNode.next
		count = count + 1
	}

	return currentNode, nil
}

func main() {
	list := NewLinkedList()

	list.Add("Ewan")
	list.Add("Peter")
	list.Add("Valentine")

	fmt.Println(list)

	res, err := list.Find(1)

	if err != nil {
		log.Println(fmt.Sprintf("Error: %v", err))
	}

	fmt.Println(res)
}
