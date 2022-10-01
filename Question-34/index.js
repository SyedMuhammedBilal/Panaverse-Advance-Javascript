// list of three animals
const animals = ["dog", "cat", "bird"];

// create for loop
for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} would make a great pet.`);
  if (i === animals.length - 1) {
    console.log("Any of these animals would make a great pet!");
  }
}