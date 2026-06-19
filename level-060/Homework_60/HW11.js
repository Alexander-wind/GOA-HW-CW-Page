// calculator ობიექტი
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    modulus: function(a, b) {
        return a % b;
    },
    compare: function(a, b) {
        if (a > b) {
            return "პირველი რიცხვი მეტია";
        } else if (b > a) {
            return "მეორე რიცხვი მეტია";
        } else {
            return "ტოლია";
        }
    }
};

// მაგალითები
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(6, 3));
console.log(calculator.modulus(5, 2));
console.log(calculator.compare(10, 7));