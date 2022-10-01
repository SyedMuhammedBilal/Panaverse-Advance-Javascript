const guests = ["Matt Smith", "Aegon", "Ivar"];

guests.unshift("Ragnar");
guests.splice(2, 0, "Bjorn");
guests.push("Lagertha");

for (let i = 0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + ", you're invited to dinner. \n");
    if (i === guests.length - 1) {
        console.log("i have found a bigger dinner table.");
    }
}