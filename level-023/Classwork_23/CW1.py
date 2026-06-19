


 
while True:
    x = input("Enter a word: ")
    if x[0:1] in "a" or "e" or "i" or "o" or "u" and x[-1] in "a" or "e" or "i" or "o" or "u" :
        break
    else:
        x = input("Enter a word: ")