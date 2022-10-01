const magician = ["White", "Stellar", "Dynamo", "Jon"];

function greeting(names) {
  for (let index = 0; index < names.length; index++) {
    console.log(`Great ${names[index]}`);
  }
}

greeting(magician);
