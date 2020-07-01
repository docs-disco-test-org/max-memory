#!/usr/bin/env node

var uuid = '00000000-0000-0000-0000-000000000000'

var main = () => {
  var memory = [];
  var string = '';
  var count = 0;

  for (var i = 0; i < 100 * 100; i++) {
    string += uuid;
  }

  while (true) {
    memory.push(string + count);
    count += 1;
  }
}
main()
