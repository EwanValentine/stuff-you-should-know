package main

import "fmt"

var data = []int{1, 4, 6, 8, 3, 9, 2, 7, 5}

func main() {
	result := Sort(data)
	fmt.Println(result)
}

func Sort(data []int) []int {
	var (
		n       = len(data)
		swapped = true
	)

	// Whilst swapped is true, i.e the process hasn't completed yet
	for swapped {

		swapped = false

		// For each integer in the map
		// Zero index the length of the map
		for i := 0; i < n-1; i++ {

			// If current value is bigger than the next
			if data[i] > data[i+1] {

				// Swap current value with next value
				data[i+1], data[i] = data[i], data[i+1]

				// Set swapped to true in order to re-run the
				// iteration again
				swapped = true
			}
		}
		n = n - 1
	}

	return data
}
