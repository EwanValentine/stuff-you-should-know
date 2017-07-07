package main

import "fmt"

var limit = 50

func main() {
	res := FizzBuzz(limit)
	fmt.Println(res)
}

func FizzBuzz(limit int) []interface{} {
	result := make([]interface{}, 0)
	for i := 0; i < limit; i++ {
		output := ""
		if i%3 == 0 {
			output += "Fizz "
		}

		if i%5 == 0 {
			output += "Buzz"
		}

		if output == "" {
			result = append(result, i)
			continue
		}

		result = append(result, output)
	}

	return result
}
