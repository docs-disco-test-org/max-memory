#!/usr/bin/env node

var uuid = '00000000-0000-0000-0000-000000000000'

var main = () => {
  var memory = [uuid]

  while (true) {
    memory = memory.concat(memory)
  }
}
main()
