'''
მომხმარებელს სთხოვე შეიყვანოს თავისი ასაკი და მიუთითოს, აქვს თუ არა სტუდენტური ბარათი.
შემდეგ:
თუ ასაკი ნაკლებია 18-ზე ან სტუდენტური ბარათი აქვს → დაბეჭდე "დანაზოგი გაქვს!"
თუ ასაკი 60 ან მეტია და არ აქვს ბარათი → დაბეჭდე "პენსიონერის ფასდაკლება გაქვს!"
სხვა შემთხვევაში → "ფასდაკლება არ გეკუთვნის."
'''

y=int(input("Enter your age: "))               #2
z=input("Do you own a Student ID? (yes/no): ") 

if y <= 18 or z == "yes":
    print("დანაზოგი გაქვს!")
elif y >= 60 and z == "no":
    print("პენსიონერის ფასდაკლება გაქვს!")
else:
    print("ფასდაკლება არ გეკუთვნის!")