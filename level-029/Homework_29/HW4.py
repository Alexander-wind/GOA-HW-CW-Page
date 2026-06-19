#შექმენით ფუნქცია, რომელიც იღებს წინადადებას, და მასში space-ების მაგივრად სიტყვებს შორის ჩასვამს ტირეს("-"). საბოლოოდ კი აბრუნებს მას

def sentance(x):
    words = x.split()
    w = "-".join(words)
    return w
s = input("Enter a sentance: ")
print(sentance(s))