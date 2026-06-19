# შემოატანინეთ მომხმარებელს სტრინგი და თუ მომხმარებლის შემოტანილი სტრინგი არის 'yes', მაშინ შემოატანინეთ სახელი და გამოიტანეთ ის. ყველა ვარიანტში საბოლლოდ დაემშვიდობეთ მომხმარებლლს მესიჯი 'goodbye' - თი

x = input("Please enter a string: ")
if x == "yes":
    name = input("What is your name? ")
    print(name)
    print(f"Goodbye {name}")