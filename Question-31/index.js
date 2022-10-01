// Make a list of five or more usernames called current_users.
const current_users = ["admin", "John", "David", "Stark", "Micheal"];
const new_users = ["Daemon", "john", "Harwin", "Stark", "Tony"];

for (let i = 0; i < new_users.length; i++) {
  const isExist = current_users.find((user) => user.toLowerCase() === new_users[i].toLowerCase());
  if (isExist) {
    console.log("Sorry, " + new_users[i] + " is already taken.");
  } else {
    console.log("Great, " + new_users[i] + " is available.");
  }
}
