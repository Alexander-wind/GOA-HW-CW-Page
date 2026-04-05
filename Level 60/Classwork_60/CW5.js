// შექმენი ობიექტი რომელსაც ექნება მეთოდი, ობიექტს ექნება სახელი და ასაკი, '
// ამ მეთოდმა უნდა გააკეთოს "ჩემი სახელია [სახელი] და ვარ [ასაკი]"

const alex = {
    name : 'alex',
    age : 14,
    me : function() {
        console.log('My name is ', this.name , 'and Im', this.age )
    }
}