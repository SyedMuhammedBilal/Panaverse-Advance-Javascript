const guests = ["Matt Smith", "Aegon", "Ivar"];

guests.unshift("Ragnar");
guests.splice(2, 0, "Bjorn");
guests.push("Lagertha");

for (let i = 0; i < guests.length; i++) {
    console.log("Hi " + guests[i] + ", you're invited to dinner. \n");
}

for (let i = 0; i < guests.length; i++) {
    if (guests.length > 2) {
        console.log("Sorry, " + guests[i] + ", you can't make it to dinner.");
        guests.splice(i, 1);
        i--;

        if (guests.length === 2) {
            for (let i = 0; i < guests.length; i++) {
                console.log("Hi " + guests[i] + ", you're invited to dinner.");
            }
            guests.splice(0, 2);
            console.log("The array is now empty: " + guests);
        }
    }
}