const age = 4;

if (age < 2) {
  console.log("the person is baby");
} else if (age >= 2 && age < 4) {
  console.log("that the person is a toddler");
} else if (age >= 4 && age < 13) {
  console.log("that the person is a kid");
} else if (age >= 13 && age < 20) {
  console.log("that person is a teen ager");
} else if (age >= 20 && age < 65) {
  console.log("that person is an adult");
} else if (age >= 65) {
  console.log("the person is an elder");
}
