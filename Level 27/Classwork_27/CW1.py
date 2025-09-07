#მომხმარებელს შემოატანინეთ სიტყვა, თუ ამ სიტყვის სიგრძე არის 5-ზე მეტი, მაშინ გამოვიტანოთ ყველა ასო, პატარა შრიფტით, თუ არადა დიდით

word = input("Enter a word: ")

if len(word) <= 5:
    print(word.lower())
else:
    print(word.upper())