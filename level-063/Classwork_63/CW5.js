// შექმენი ობიექტი multiplier (while loop)
let multiplierWhile = {
    number: 2,
    times: 4,

    multiply: function() {
        let result = 1;
        let i = 0;

        while (i < this.times) {
            result *= this.number;
            i++;
        }

        return result;
    }
};

console.log(multiplierWhile.multiply());
