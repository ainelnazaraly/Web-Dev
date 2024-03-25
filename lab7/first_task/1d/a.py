num = int(input())

arr = list(map(int, input().split()))

for i in range(0, num, 2):
    print(arr[i], end=" ")