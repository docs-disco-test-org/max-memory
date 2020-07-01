#!/use/bin/env python

UUID = '00000000-0000-0000-0000-000000000000'

def main():
  memory = []
  string = ''
  count = 0

  for i in range(0, 100):
    string += UUID

  while True:
    memory.append("{0}:{1}".format(string, count))
    count = count + 1

if __name__ == "__main__":
  main()