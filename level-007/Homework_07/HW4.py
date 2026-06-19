# დაწერე პროგრამა, რომელიც სთხოვს მომხმარებელს პაროლის შეყვანას. სწორი პაროლია "python123". სანამ სწორად არ შეიყვანს, მოთხოვე თავიდან

z = 'python123'                               
a = input('Input a password: ')               
                                
while a != z:                                 
    print('Password is incorrect')
    a = input('Try again: ')

print('Password is correct')