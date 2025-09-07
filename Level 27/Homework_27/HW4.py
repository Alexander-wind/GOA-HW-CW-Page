#შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. 
# გადაუარეთ ამ სიას for ციკლით და ჩაამატეთ მხოლოდ ლუწი რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია

def odds(list):
    new_version = []
    for i in list:
        if i % 2 == 0:
            new_version.append(i)
    return new_version

l1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(odds(l1))
