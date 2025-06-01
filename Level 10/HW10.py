x=int(input("Enter a number: ")) #1
 
for i in range(x+2):
    print(i)

y=int(input("Enter your age: "))               #2
z=input("Do you own a Student ID? (yes/no): ") 

if y <= 18 or z == "yes":
    print("დანაზოგი გაქვს!")
elif y >= 60 and z == "no":
    print("პენსიონერის ფასდაკლება გაქვს!")
else:
    print("ფასდაკლება არ გეკუთვნის!")

a=int(input("Enter a number: "))            #3
b=int(input("Enter another number: "))

if a > 0 and b > 0:
    print("ორივე დადებითია")
elif (a < 0 and b > 0) or (a > 0 and b < 0):
    print("მხოლოდ 1 დადებითია")
else:
    print("არცერთი დადებითია")

c=int(input("Enter a number: "))            #4
d=int(input("Enter another number: "))
e=input("enter an operation (+, -, *, /): ")
print(type(c))

if e == "+":
    print(c + d)
elif e == "-":
    print(c - d)
elif e == "*":
    print(c * d)
elif e == "/":
    if d != 0:
        print(c / d)
    else:
        print("არასწორი ოპერაცია!")
else:
        print("არასწორი ოპერაცია!")

#no n5