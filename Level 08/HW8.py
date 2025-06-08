# datatype converson: №1
#implicit-ავტომატიური დადგენა, არ სჭირდება ჩვენი მითითითება. მაგ: x=1 - int; y=1.5 - float; z="hello" - str
#explicit-ავტომატიური დადგენა არაა, ჩვენ ვუთითებთ რომელი ტიპის მონაცემი გვინდა. მაგ: x=int(1.5) - int; y=float(1) - float; z=str(1) - str

x=int(input("Enter a number: "))
   # №2
for i in range(0,x,1):
    print(x)
    x-=1

y=int(input("Enter a number: "))  #№3   

while y>=0:
    print(y)
    y-=1
