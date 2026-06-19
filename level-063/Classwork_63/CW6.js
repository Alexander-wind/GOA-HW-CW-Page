// შექმენი ობიექტი calculator (for loop)
let calculatorFor = {
    n: 5,

    sumToN: function() {
        let sum = 0;

        for (let i = 1; i <= this.n; i++) {
            sum += i;
        }

        return sum;
    }
};

console.log(calculatorFor.sumToN());

