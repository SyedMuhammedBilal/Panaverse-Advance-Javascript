// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name = "John Doe";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()));
