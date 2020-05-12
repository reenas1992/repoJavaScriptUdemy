// console.log("Hello World!!!");

// /* Variable and data types */
// var strFirstName = "Reena";
// console.log(strFirstName);

// var strLastName = "Sakhare";
// console.log(strLastName);

// var strFullName;
// console.log("FullName: " + strFirstName + " " + strLastName);

// var intAge = 27;
// var boolFullAge = true;
// console.log(boolFullAge);

// var strJob;
// console.log(strJob);

// var strJob = "SoftWare Developer";
// console.log(strJob);

// // Variable Naming Rule
// var _2years = 2;
// var johnMark = "Jhon and Mark";

// /*** Variable Mutation And Type Coercion ***/
// var boolIsMarried = true;
// console.log(
//   strFirstName +
//     " is a " +
//     intAge +
//     " year old " +
//     strJob +
//     " is she married? " +
//     boolIsMarried
// );

// // Variable Mutation
// strAge = "Twenty Seven";
// strJob = "Teacher";
// alert(
//   strFirstName +
//     " is a " +
//     intAge +
//     " year old " +
//     strJob +
//     " is she married " +
//     boolIsMarried
// );

// var strLastName = prompt("What is her Last Name?");
// console.log(strFirstName + " " + strLastName);

/*** Basic Operators***/
// var intYear, yearReena, yearSameer;
// now = 2020;
// intAgeReena = 28;
// intAgeSameer = 31;

// // Maths Operations
// yearReena = now - intAgeReena;
// yearSameer = now - intAgeSameer;
// console.log(yearReena);
// console.log(yearSameer);

// console.log(now + 3);
// console.log(now * 3);
// console.log(now / 3);
// console.log(now - 3);

// // Logical Operator
// var boolAgeOlder = intAgeReena < intAgeSameer;
// console.log(boolAgeOlder);

// //// Type of operator
// console.log(typeof boolAgeOlder);
// console.log(typeof intAgeReena);
// console.log(typeof "Sameer is older tha Reena");
// var x;
// console.log(typeof x);

/*** Operator Precedence ***/
// var intNow = 2020;
// var intYearReena = 1992;
// var intFullAge = 20;

// Multiple Operator
// var boolIsFullAge = intNow - intYearReena >= intFullAge; //true
// console.log(boolIsFullAge);

//Grouping
// var intAgeReena = intNow - intYearReena;
// var intAgeSameer = 32;
// var fAverage = (intAgeReena + intAgeSameer) / 2;
// console.log(fAverage);

//Multiple Assignments
// var x, y;
// x = y = (5 + 4) * 3 - 7; // 4*7-5//49-4// 20

//More Operator
// x *= 2;
// console.log(x);
// x += 20;
// console.log(x);
// x--;
// console.log(x);

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/*** If / else Statement ***/
// var strFirstName = "Jhone";
// var strCivilStatus = "Single";

// if (strCivilStatus == "married") {
//   console.log(strFirstName + " is married!");
// } else {
//   console.log(strFirstName + " will hopefully marry soon : ");
// }

// var boolIsMarried = true;
// if (boolIsMarried) {
//   console.log(strFirstName + " is married! ");
// } else {
//   console.log(strFirstName + " will hopefully marry soon : ");
// }

// var massMark = 80; // kg
// var heightMark = 1.79; //meters

// var massJohn = 89;
// var heightJohn = 1.92;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightMark * heightMark);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is highter than Jhon's. ");
// } else {
//   console.log("Jhon's BMI is highter than Mark's. ");
// }

/*** Boolean Logic ***/
var strFirstName = "Reena";
var intAge = 27;

if (intAge < 20) {
  console.log(strFirstName + " is a girl .");
} else if (intAge >= 20 && intAge < 25) {
  console.log(strFirstName + "is a young girl. ");
} else if (intAge > 25 && intAge < 30) {
  console.log(strFirstName + " is a woman. ");
}
