'''
ასაკის შეჯერება დღის მონაკვეთთან
შეიყვანოს მომხმარებელმა ასაკი და საათი (0-დან 23-მდე). პროგრამამ განსაზღვროს:

თუ ასაკი < 18 და დრო ≥ 22 → "დროა დაძინების"

თუ ასაკი ≥ 60 და დრო ≥ 21 → "დასვენება რეკომენდებულია"

სხვა შემთხვევაში → "შეგიძლიათ გააგრძელოთ აქტივობა"
'''

age = int(input("შეიყვანეთ თქვენი ასაკი: "))
hour = int(input("შეიყვანეთ საათი (0-დან 23-მდე): "))

if age < 18 and hour >= 22:
    print("დაძინების დროა")
elif age >= 60 and hour >= 21:
    print("დასვენება რეკომენდებულია")
else: 
    print("შეგიძლიათ გააგრძელოთ აქტივობა")

