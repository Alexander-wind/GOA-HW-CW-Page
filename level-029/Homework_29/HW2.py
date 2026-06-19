# შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას და დაბეჭდავს მის თითოეულ სიტყვაში სიმბოლოების რაოდენობას(ცალ-ცალკე)

def sentance(x):
    words = x.split()
    for i in words:
        print(f"{i} - {str(len(i))}")
    

s = input("enter a sentance: ")
sentance(s)