num1 = 6
num2 = 12

for i in range(1, (num1+1)):
    if num1 % i == 0 and num2 % i == 0:
        print('공약수: {}'.format(i))
        maxNum = i

print('최대공약수: {}'.format(maxNum))

minNum = (num1*num2)//maxNum
print('최소공배수: {}'.format(minNum))
