// შექმენი ობიექტი student...
let student = {
    name: "Giorgi",
    score: 55,

    passOrFail: function() {
        if (this.score >= 50) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
};

console.log(student.passOrFail());
