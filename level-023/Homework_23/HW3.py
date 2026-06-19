# რობოტმა უნდა დაითვალოს, რამდენჯერ სცადე სწორი სიტყვის შეყვანა.
# ანუ ყოველ ჯერზე, როცა სწორი სიტყვა უთხარი, უნდა დაიმახსოვროს და უთხრას ბოლოს რიცხვი.

password = "GOA"
attempt = 0

x = input("Enter the password: ")
while True:
    if x != password:
        x = x = input("Incorrect, try again. Enter: ")
        attempt +=1
    else: 
        print("Access granted")
        print(f"Your attempts: {attempt}")
        break