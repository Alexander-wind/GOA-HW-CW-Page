#შექმენით ფუნქცია რომელიც მიიღებს რიცხვების სიას და დაბრუნებს მხოლოდ ლუწების ჯამს

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def odds(list):
    odd = 0
    for i in list:
        if i % 2 == 0:
            odd += i
    return odd

print(odds(numbers))