def minimum(a, b, c, d):
    min = a
    if b < min:
        min = b
    if c < min:
        min = c
    if d < min:
        min = d
    return min

a, b, c, d = map(int, input().split())

print(minimum(a, b, c, d))