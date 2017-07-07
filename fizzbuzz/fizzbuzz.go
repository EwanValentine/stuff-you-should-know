package main

import "fmt"

var limit = 50

func main() {
	FizzBuzz(limit)
}

func FizzBuzz(limit int) {
	for i := 0; i < limit; i++ {
		output := ""
		if i%3 == 0 {
			output += "Fizz "
		}

		if i%5 == 0 {
			output += "Buzz "
		}

		if output == "" {
			fmt.Println(i)
			continue
		}

		fmt.Println(output)
	}
}
