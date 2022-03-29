import string


num1 = int(input('1보다 큰 정수 입력: '))
num2 = int(input('1보다 큰 정수 입력: '))
maximum = 0

for i in range(1, num1 + 1):
    if num1 % i == 0 and num2 % i == 0:
        print('공약수: {}'.format(i))
        maximum = i

print('\n최대공약수: {}'.format(maximum))

temp1 = num1
temp2 = num2

while temp2 > 0:
    temp = temp2
    temp2 = temp1 % temp2
    temp1 = temp

print('{}, {}의 최대공약수: {}'.format(num1, num2, temp1))
