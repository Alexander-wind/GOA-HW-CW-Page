# მომხმარებელმა უნდა შეიყვანოს რიცხვი n. პროგრამამ while ციკლით უნდა დაითვალოს 1-დან n-მდე რიცხვების ჯამი.

b = int(input('Enter a number: '))  #5 
c = 1
sum = 0
while c <= b:
    sum += c
    c += 1
print(sum)     
 