// შექმენი ობიექტი car და დაამატე თვისება speed. შექმენი მეთოდი, რომელიც აბრუნებს "Too fast" თუ სიჩქარე > 120, სხვა შემთხვევაში "Speed okay".
let car = {
    speed: 100,

    checkSpeed: function() {
        if (this.speed > 120) {
            return "Too fast";
        } else {
            return "Speed okay";
        }
    }
};

console.log(car.checkSpeed());
