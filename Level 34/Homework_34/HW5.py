#შექმენით tuple სადაც შეინახავთ სიტყვებს შემდეგ დაწერე პროგრამა, რომელიც დაითვლის, რამდენჯერ მეორდება რომელიმე სიტყვა ტაპლში.

t1 = ("Apple", "Banana", "Apple", "Orange", "Banana", "Apple")
#seti amoirebs unikalur sityvebs

for i in set(t1):
    print(i, "meordeba", t1.count(i)) 
 