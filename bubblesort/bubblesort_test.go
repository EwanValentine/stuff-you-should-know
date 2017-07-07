package main

import (
	"testing"
)

func TestSort(t *testing.T) {
	res := Sort(data)
	if res[0] != 1 {
		t.Fail()
	}

	if res[8] != 9 {
		t.Fail()
	}
}
