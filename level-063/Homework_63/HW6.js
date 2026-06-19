// შექმენი ობიექტი calculator და დაამატე თვისება n. შექმენი მეთოდი, რომელიც for loop-ით ითვლის 1–დან n-მდე ჯამს.
let calculator = {
    n: 5,

    sum: function() {
        let total = 0;

        for (let i = 1; i <= this.n; i++) {
            total += i;
        }

        return total;
    }
};

console.log(calculator.sum());