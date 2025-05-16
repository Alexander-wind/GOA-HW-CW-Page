#sequence-რაღაცის თანმიმდევრობით სვლა
#iteration-რაღაცის გამეორება სანამ რაღაც შეიცვლება
#selection-არჩევა

#algorithm-ინსტრუქცია, თუ რა როგორ უნდა გავაკეთოთ
#print(True or False and False or True and False or False and False or False and True and False or True) რა გამოვა?
#print(5 > 10 or 7 * 7 / 7 == 7 and False or True and "1234" != "1234" and 7 + 3 * 3 + 1 == 15 and True and True or 100 > 100 or True) რა გამოვა?

x=int(input("input a number"))
if x % 2 == 0 or x>10 or x==7:
    print("True")

print(12-1)
print(12+3)
print(12*5)

print("dato"*3)
print("niko" + "niko")
print("niko" * 8)

print(9.81 * 10.2)
print(12.43 / 3.2)
print(12.43 - 3.2)

a=int(input("input a number"))
print(a>=10)
print(a<=1)
print(a==1)

c=int(input("input a year"))

if c % 4 == 0 and c % 100 != 0 or c % 400 == 0:
    print("This is a leap year")