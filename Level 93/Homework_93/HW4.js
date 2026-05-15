// შექმენი ფუნქცია რომელიც მიიღებს ტექსტს და დააბრუნებს იგივე ტექსტს მაგრამ ციფრების გარეშე გამოიყენე for loop if და continue 
// ფუნქცია უნდა იყოს ცალკე ფაილში და გამოყენებული იყოს იმპორტის საშუალებით სხვა ფაილში

export function removeDigits(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {

        if (!isNaN(text[i]) && text[i] !== " ") {
            continue;
        }

        result += text[i];
    }

    return result;
}