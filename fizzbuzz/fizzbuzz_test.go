package main

import "testing"

func TestFizzBuzz(t *testing.T) {
	res := FizzBuzz(limit)

	// Test 15 is FizzBuzz
	if res[15].(string) != "Fizz Buzz" {
		t.Fail()
	}
}
