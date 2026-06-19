#შექმენით ფუნქცია რომელიც არგუმენტად იღებს სიტყვას/წინადადებას და ასოს, ის აბრუნებს პირველი სად შეხვდა ასო ამ სიტყვაში

def locator(word, letter):
    new_word = word.split()
    for i in new_word:
        if letter in i:
            print(f"The letter {letter}, was in a word {i}")

locator('Welcome to my channel', 'l')
locator('Leave a good review', 'e')


 
 