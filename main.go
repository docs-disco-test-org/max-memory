package main

import "fmt"

const uuid = "00000000-0000-0000-0000-000000000000"

func main() {
	mem := make([]string, 1)
	str := ""
	cnt := 0

	for i := 0; i < 100; i++ {
		str = str + uuid
	}

	for {
		mem = append(mem, fmt.Sprintf("%v/%v", str, cnt))
		cnt++;
	}
}