# მომხმარებელს შემოატანინეთ სამი რიცხვი, start/end/step და ჩასვით for loop-ში სათანადო ადგილას.

start=int(input("Enter a number: "))
end=int(input("Enter a number: "))
step=int(input("Enter a number"))

for i in range(start, end, step):
    print(i)