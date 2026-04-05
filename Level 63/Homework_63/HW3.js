// შექმენი ობიექტი student და დაამატე თვისება score. შექმენი მეთოდი, რომელიც აბრუნებს "Passed" თუ ქულა >= 50, სხვა შემთხვევაში "Failed".
let student = {
    score: 45,

    checkScore: function() {
        if (this.score >= 50) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
};

console.log(student.checkScore());

