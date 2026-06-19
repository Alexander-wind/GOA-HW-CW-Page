#  შექმენი for loop- რომელიც გამოიტანს 1-100 ჩატვლით რიცხვებს და ასევე კენტია თუ ლუწი ეს რიცხვი.

for i in range(101):
    if i % 2 == 0:
        print(f"{i} is even")
    else:
        print(f"{i} is odd")