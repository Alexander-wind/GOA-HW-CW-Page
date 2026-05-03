// მოცემულია თანამშრომლების სია სამუშაო საათებით. დაწერეთ პროგრამა, რომელიც დაადგენს 
// რამდენმა თანამშრომელმა იმუშავა 40 ან მეტი საათი, რამდენმა ნაკლები, ასევე გამოითვლის ყველა თანამშრომლის ნამუშევარი 
// საათების ჯამსა და საშუალოს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const employees = [
  { name: "Gio", hours: 45 },
  { name: "Nika", hours: 38 },
  { name: "Ana", hours: 50 },
  { name: "Lika", hours: 20 }
];

const result = employees.reduce((acc, emp) => {
  if (emp.hours >= 40) {
    acc.fullTime++;
  } else {
    acc.partTime++;
  }

  acc.sum += emp.hours;

  return acc;
}, { fullTime: 0, partTime: 0, sum: 0 });

result.average = result.sum / employees.length;

console.log(result);