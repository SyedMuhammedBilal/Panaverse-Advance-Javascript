const magician = ["White", "Stellar", "Dynamo", "Jon"];
const copy = [];

function greeting(names) {
  for (let index = 0; index < names.length; index++) {
    copy.push(`Great ${names[index]}`);
  }
}

function show_magicians(names) {
  for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
  }
}

show_magicians(magician);
greeting(magician);
show_magicians(copy);
