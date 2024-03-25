binary = input()
decomal = 0

for i in range(len(binary)):
    decomal += int(binary[len(binary) - 1 - i]) * (2 ** i)

print(decomal)