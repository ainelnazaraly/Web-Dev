def power(a, n):
    result = 1
    for i in range(n):
        result *= a
    return result

a, n = map(float, input().split())

print(power(a, int(n)))