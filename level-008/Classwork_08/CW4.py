#  მომხმარებელს შემოაყვანინეთ რიცხვი, სანამ ეს რიცხვი არ იქნება 100-ზე მეტი მაქამდე თავიდან მოთხოვთ რიცხვის შემოტანა

x = int(input("Enter a number: "))       
for i in range(10000):
    if x >= 100:
        break
    else:
        print("Try again")
        x = int(input("Enter a number: "))
    