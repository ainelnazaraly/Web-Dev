import math

num= int(input())
counter = 0

for i in range(1, int(math.sqrt(num)) + 1):
    if num % i == 0:
        counter += 2
if num == int(math.sqrt(num)) ** 2:
    counter -= 1

print(counter)