const guests = ["Matt Smith", "Aegon", "Ivar"];

for (let i = 0; i < guests.length; i++) {
    if (guests[i] === "Ivar") {
        guests[i] = "Ragnar";
    }
    console.log("Hi " + guests[i] + ", you're invited to dinner.");
}
