// შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებთ  რიცხვს (რიცხვები 1-დან 7-ის ჩათვლით) და 
// ეს იქნება ასე: 1 == ორშაბათი; 2 == სამთაბათი და ასე შემდეგ, თქვენი დავალებაა რიცხვის მიხედვით გამოიტანოთ კვირის დღე. 
// თუ რიცხვი არის 7-ზე მეტი (ანუ სხვა შემთხვევაში) გამოიტანეთ "არასწორი რიცხვი".

let dayNum = Number(prompt("Enter a number from 1 to 7"));

switch(dayNum) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number");
}