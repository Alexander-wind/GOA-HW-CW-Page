# მომხმარებელს სთხოვე შეიყვანოს ორი რიცხვი. შემდეგ:
'''
თუ ორივე რიცხვი დადებითია → დაბეჭდე "ორივე დადებითია"
თუ მხოლოდ ერთი დადებითია → "მხოლოდ ერთი დადებითი რიცხვია"
თუ არცერთი არ არის დადებითი → "არცერთი არ არის დადებითი"
'''

a=int(input("Enter a number: "))            
b=int(input("Enter another number: "))

if a > 0 and b > 0:
    print("ორივე დადებითია")
elif a < 0 and b > 0 or a > 0 and b < 0:
    print("მხოლოდ 1 დადებითია")
else:
    print("არცერთი დადებითია")