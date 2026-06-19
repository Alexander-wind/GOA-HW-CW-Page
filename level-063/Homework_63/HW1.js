// შექმენი ობიექტი user და დაამატე თვისება age. შექმენი მეთოდი, რომელიც აბრუნებს "Adult" თუ ასაკი >= 18, სხვა შემთხვევაში "Minor".
let user = {
    age: 17,

    checkAge: function() {
        if (this.age >= 18) {
            return "Adult";
        } else {
            return "Minor";
        }
    }
};

console.log(user.checkAge());
