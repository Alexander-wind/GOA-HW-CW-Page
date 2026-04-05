// შექმენი ობიექტი repeater და დაამატე თვისება text და count. შექმენი მეთოდი, რომელიც while loop-ით აჩვენებს ტექსტს რამდენჯერაც მითითებულია.
let repeater = {
    text: "HELLO",
    count: 3,

    repeat: function() {
        let i = 0;

        while (i < this.count) {
            console.log(this.text);
            i++;
        }
    }
};

repeater.repeat();
