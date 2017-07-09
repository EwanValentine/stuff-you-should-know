package main

import (
	"errors"
	"fmt"
	"log"
)

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
		list.length += 1

		return node
	}

	for currentNode.next != nil {
		currentNode = currentNode.next
	}

	currentNode.next = node

	list.length += 1

	return node
}

func (list *LinkedList) Find(position int) (*Node, error) {
	currentNode := list.head
	length := list.length
	count := 0

	if length == 0 || position < 1 || position > length {
		return nil, errors.New("Node not found")
	}

	for count < position {
		currentNode = currentNode.next
		count += 1
	}

	return currentNode, nil
}

func main() {
	list := LinkedList{}

	list.Add("This is a test")

	res, err := list.Find(1)

	if err != nil {
		log.Println(fmt.Sprintf("Error: %v", err))
	}

	fmt.Println(res.data)
}
