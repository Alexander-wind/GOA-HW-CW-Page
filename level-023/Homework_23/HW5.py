# შეიყვანე სიტყვა და რობოტმა უნდა დათვალოს რამდენი ხმოვანია და რამდენი თანხმოვანი აქვს მას.
# გაიმეორებს ამას მანამ, სანამ არ შეიყვან სწორ სიტყვას.

#  ანუ რობოტს ეუბნები სიტყვას → ის გეუბნება:

# "ამ სიტყვაში არის 3 ხმოვანი და 4 თანხმოვანი"

# და გთხოვს ახალს, სანამ სწორ სიტყვას არ ეტყვი

x= input("Enter a word: ")
vowel = 0
consonant = 0

c = "a" in x
d = "e" in x
e = "i" in x
f = "o" in x
g = "u" in x
if c:
    vowel +=1
if d:
    vowel +=1
if e:
    vowel +=1
if f:
    vowel +=1
if g:
    vowel +=1
count = len(x)

consonant = count - vowel

print(vowel)
print(consonant)