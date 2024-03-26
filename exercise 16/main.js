// Creating a guest list array
var guestList = ["Kashif", "Wasif", "Hunain", "Anus"];
// making a variable for whom guest who dont come
var dontCome = guestList[2];
// Print a guest name who not come
console.log(dontCome, "will not come");
// Add or remove the values from guest array
guestList.splice(2, 1, "Maliha");
// Message print for bigger table
console.log("Good News ! We have found a bigger table for dinner.");
// Adding a new guest at start of an array
guestList.unshift("Zoya");
// Adding a new guest at end of an array
guestList.push("Arooj");
// Get a middle index for our guest list aaray
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest at start of an array
guestList.splice(middleIndex, 0, "Emaan");
// Print message of updated list
console.log("Updated list of our guests");
// Sending a invitation message to our guest 1 by 1 with thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would u like to dinner with me?")); });
