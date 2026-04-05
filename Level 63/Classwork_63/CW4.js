// შექმენი ობიექტი calculator (while loop)
let calculatorWhile = {
    n: 5,

    sumToN: function() {
        let sum = 0;
        let i = 1;

        while (i <= this.n) {
            sum += i;
            i++;
        }

        return sum;
    }
};

console.log(calculatorWhile.sumToN());
