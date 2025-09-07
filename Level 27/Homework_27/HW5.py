# შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. შექმენით ახალის სია, სადაც ჩაამატებთ გადმოცემული სიიდან მხოლოდ იმ სახელებს, 
# რომლებიც იწყება "N"-ზე`. საბოლოოდ დააბრუნეთ ეს სია

def nnames(list):
    only_n_names = []
    for i in list:
        if i[0].lower() == "n":
            only_n_names.append(i)
    return only_n_names

names = ['Nini', 'Lasha', 'Nika', 'Nata', 'Gega']

print(nnames(names))
