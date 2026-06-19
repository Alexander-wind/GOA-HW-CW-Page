# მომხმარებელს შემოაყვანინეთ რიცხვი, სანამ ეს რიცხვი არ იქნება 100-ზე მეტი მაქამდე თავიდან მოთხოვთ რიცხვის შემოტანა

x = int(input("Enter a number: "))       
while x >= 100:
    print("Try again")
    x = int(input("Enter a number: "))