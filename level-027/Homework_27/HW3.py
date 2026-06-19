#შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. გადაუარეთ ამ სიას while ციკლით და ჩაამატეთ გაორმაგებული რიცხვები ახალ სიაში. 
# საბოლოოდ დააბრუნეთ ეს სია

 
def doubling_lists(number):
    doubled = []
    i = 0
    while i < len(number):
        doubled.append(number[i] * 2)
        i += 1
    return doubled
    
l1 = [1, 2, 3, 4, 5, 8]

print(doubling_lists(l1))