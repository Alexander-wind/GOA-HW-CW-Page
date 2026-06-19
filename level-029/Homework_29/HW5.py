# შექმენით ფუნქცია, რომელსაც გადაეცემა წინადადება. 
# თქვენი დავალებაა ამ წინადადების სიტყვები შეაბრუნოთ და დააბრუნოთ(სიტყვების სიმბოლოები არ უნდა იყოს შებრუნებული) 

def sentance(x):
    words = x.split()
    w = words[::-1]
    m = " ".join(w)
    return m

s=input("Enter a sentance: ")
print(sentance(s))