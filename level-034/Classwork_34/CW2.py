#შექმენით Tuple -ი და სეცვალეთ მეორე ინდექსზე მყოფი ელემენტი ზუსტად ისე როგორც გაკვეთილზე განახეთ, 
# სბოლოოდ გამოპრინტეთ ახალი tuple ელემენტ შეცვლილი. ახსენით კომენტარებით რომელ ხაზზე რა ხდება.

fruits = ("papaya", "banana", "apple", "orange", "durian")

fruitsl = list(fruits)

fruitsl[1] = "mangosteen"

fruits = tuple(fruitsl)

print(fruits)