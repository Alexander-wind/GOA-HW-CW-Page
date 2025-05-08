user_name = input("Enter your name:") #dav №1
user_age = input("Enter your age:")
print(f"Name: {user_name}, Age: {user_age}")

Width = input("Enter a random number(width):") #dav №2
Height = input("Enter a random number(height):")
S = int(Width) * int(Height)
P = int(Width)*2 + int(Height)*2
print(f"Area={S}m^2, Perimeter={P}m")
print("Area/Perimeter = " + str(P / S))

Age= int(input("Enter your age:")) #dav №3
if (Age) < 18:
    print("შესვლა აკრძალულია")
else:
    print("Processing Data...")

num1 = int(input("Enter a random number1:")) #dav №4
num2 = int(input("Enter a random number2:")) 
print(f"ჯამი: {num1 + num2}, სხვაობა: {num1 - num2}, ნამრავლი: {num1 * num2}, განაყოფი: {num1 / num2}")
 