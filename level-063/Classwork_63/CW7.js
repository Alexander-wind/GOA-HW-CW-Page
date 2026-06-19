// შექმენი ობიექტი multiplier (for loop)
let multiplierFor = {
    number: 3,
    times: 3,

    multiply: function() {
        let result = 1;

        for (let i = 0; i < this.times; i++) {
            result *= this.number;
        }

        return result;
    }
};

console.log(multiplierFor.multiply());