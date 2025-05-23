x=1                #1
while x<=10:
    print(x)
    x=x+1

y=10                #2
while y>=1:
    print(y)
    y=y-1

#while loop-პროცესი რომელიც მიმდინარეობს მანამ სანამ მოცემული პირობა შეიცვლება, თუ არა და ის სამუდამოდ გაგრძელდება   #3

z = 'python123'                                 #4 აქ, როდესაც თავიდან მომხმარებელი წერს პაროლს, და ის არ შეესაბამება,   
a = input('Input a password: ')                 # იმის შემდეგ რაც Password is incorrect დაიპრინტება,
                                                # პროგრამა მას თავიდან სტხოვს მას თვით while loopში და თავიდან აწერინებს.  
while a != z:                                   # ეს გაგრძელდება სანამ ის არ შეიყვანს სწორ პაროლს
    print('Password is incorrect')
    a = input('Try again: ')

print('Password is correct')

b = int(input('Enter a number: '))  #5 
c = 1
sum = 0
while c <= b:
    sum += c
    c += 1
print(sum)     
    
