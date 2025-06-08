# მომხმარებელი შეიყვანს ორ რიცხვს და ოპერაციას (+, -, *, /) დაბეჭდე შედეგი შესაბამისი მოქმედებით. თუ ოპერაცია არასწორია (მაგ 0-ს გაყოფა ან ტექსტი ან უცხო სიმბოლო) → "არასწორი ოპერაცია!" 

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