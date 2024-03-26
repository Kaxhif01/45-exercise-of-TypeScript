// Creating a guest list array
let guestList = ["Kashif","Wasif","Hunain","Anus"];

// making a variable for whom guest who dont come
let dontCome = guestList[2];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest at start of an array
guestList.splice(middleIndex, 0, "Emaan");

// Print message of updated list
console.log("Updated list of our guests");

// Sending a invitation message to our guest 1 by 1 with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would u like to dinner with me?`));

// inform that only 2 guest invited for dinner
console.log("Unfortunately, the new dinner table not arrive on time, so i can only invite two guest to dinner wth me");

// Using while-loop to remove guest from array until only 2 names remains 
while(guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);
}
// sending a invitation to the last 2 guest of our list
console.log("Invitation to the last 2 guests.");

guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited for dinner`));

// Removing last 2 guest from the list
guestList.pop();
guestList.pop();

console.log("Empty list:", guestList);