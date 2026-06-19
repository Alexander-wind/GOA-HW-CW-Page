// შექმენი ობიექტი user...
let user = {
    name: "Alex",
    age: 19,

    isAdult: function() {
        if (this.age >= 18) {
            return "You are an adult";
        } else {
            return "You are not an adult";
        }
    }
};
console.log(user.isAdult());
