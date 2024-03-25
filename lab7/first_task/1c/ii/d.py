n = int(input())
pwr = 1

while pwr < n:
    pwr *= 2

if pwr == n:
    print("YES")
else:
    print("NO")