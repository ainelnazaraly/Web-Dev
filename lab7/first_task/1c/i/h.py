x = int(input())
div = []

for i in range(1, x + 1):
    if x % i == 0:
        div.append(i)

print(*div)