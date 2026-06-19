# dictionary ფასებით:

# products = {
#     "apple": 3,
#     "banana": 2,
#     "milk": 5
# }


# დაბეჭდე ყველა პროდუქტი for loop-ით.

# მომხმარებლისგან შეიყვანე პროდუქტი, თუ არსებობს → დაბეჭდე ფასი.

# დაამატე ახალი პროდუქტი update()-ით.

# ბოლოს გამოიყენე clear() ჩასაშენებლად, მაგალითად, ცარიელი dictionary-ს დაბეჭდვა დასუფთავების შემდეგ.

products = {
    'apple': 3,
    'banana': 2,
    'milk': 5
}

for i in products:
    print(f'პროდუქტი-{i}, ფასი-{products[i]}')

customer = input("Enter a product: ")

if customer in products:
    print(customer, "costs", products[customer])
else:
    print(f"There is not a product called {customer}")

products.update({ "bread": 4})

print(f"After adding a new  product-{products}")

products.clear() 