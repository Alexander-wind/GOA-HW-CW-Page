//შექმენი ობიექტი numbers (მასივი) და მეთოდი, რომელიც for loop-ით აბრუნებს მხოლოდ დადებით რიცხვებს.
let numbers = {
    arr: [-5, 10, -2, 7, 0, 3],

    getPositiveNumbers: function() {
        let positives = [];

        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > 0) {
                positives.push(this.arr[i]);
            }
        }

        return positives;
    }
};

console.log(numbers.getPositiveNumbers());