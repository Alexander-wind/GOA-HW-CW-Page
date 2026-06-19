#  მომხმარებელს შემოატანინეთ ორი რიცხვითი მნიშვნელობა (სიგანე და სიმაღლე). ტერმინალში გამოიტანეთ ფართობი/პერიმეტრი. S = ფართობი (S = width*height)/P = პერიმეტრი (P = (width+height)*2

Width = input("Enter a random number(width):") 
Height = input("Enter a random number(height):")
S = int(Width) * int(Height)
P = int(Width)*2 + int(Height)*2
print(f"Area={S}m^2, Perimeter={P}m")
print("Area/Perimeter = " + str(P / S))