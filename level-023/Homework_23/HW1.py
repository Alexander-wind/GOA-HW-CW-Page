#შეიყვანე სიტყვა, სანამ პირველი და ბოლო ასო არ იქნება თანხმოვანი

while True:
    x = input("Enter a word: ")
    if x[0:1] not in "აეიოუ" and x[-1] not in "აეიოუ" :
        break
    else:
        x = input("Enter a word: ")