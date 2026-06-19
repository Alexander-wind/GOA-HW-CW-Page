//შექმენი Arrow ფუნქცია isEven(num) — რომელიც აბრუნებს "Even" თუ რიცხვი ლუწია და "Odd" თუ კენტი. 

const EvenOdd = (num) => {
    if (Number(num) % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}