//1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"
const number = 15;
if (number > 0){
    console.log("დადებითია");
} else{
    console.log("უარყოფითია");
}

// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე

function sumNumbersFrom1To100() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
const result = sumNumbersFrom1To100();
console.log(`1დან 100მდე რიცხვების ჯამი= ${result}`);


// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

const theNumberOddOrEven = 10;
if (theNumberOddOrEven / 2){
    console.log("ლუწია")
}else{
    console.log("კენტია");
}


//4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

const car = {
    year: 2015,
    model: "BMW M5",
  };
  car.calculateAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
  const carAge = car.calculateAge();
console.log(`ეს მანქანა არის ${carAge} წლის `);


