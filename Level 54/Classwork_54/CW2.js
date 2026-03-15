//დაწერე კოდი რომელიც იღებს ასო ქულას ("A", "B", "C", "D", "F")
//და დაბეჭდავს შეფასებას:

//"A" → "Excellent!"

//"B" → "Good"

//"C" → "Average"

//"D" → "Poor"

//"F" → "Fail"

//სხვა სიმბოლო → "Invalid grade"

let grade = prompt('Enter your grade("A", "B", "C", "D", "F")')

switch (grade) {
    case 'A':
        console.log('Excellent')
    case 'B':
        console.log('Good')
    case 'C':
        console.log('Average')
    case 'D':
        console.log('Poor')
    case 'F':
        console.log('Fail')
    default:
        console.log('Invalid grade')
}
