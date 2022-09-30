const nameA = "David";
const nameB = "John";

nameA !== "John" ? console.log(true) : console.log(false);
nameB.toLowerCase() !== "john" ? console.log(true) : console.log(false);

const x = 5;

if (x === 5) {
  console.log("x is equal to 5");
}

if (x !== 5) {
  console.log("x is not equal to 5");
}

if (x > 5) {
  console.log("x is greater than 5");
}

if (x < 5) {
  console.log("x is less than 5");
}

if (x >= 5) {
  console.log("x is greater than or equal to 5");
}

if (x <= 5) {
  console.log("x is less than or equal to 5");
}

const y = 10;

if (x > 5 && y > 5) {
  console.log("x and y are both greater than 5");
}

if (x > 5 || y > 5) {
  console.log("x or y is greater than 5");
}

const array = [1, 2, 3, 4, 5];

if (array.includes(3)) {
  console.log("3 is in the array");
}

if (!array.includes(6)) {
  console.log("6 is not in the array");
}