#შექმენით ფუნქცა რომელიც იღებს წინადადებას და აბრუნებ რამდენი სიტყვაა მასში

def counter(sentance):
    words = sentance.split()
    return len(words)

print(counter('Hello, my name is alex'))