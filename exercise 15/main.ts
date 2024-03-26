let guestList = ["Kashif","Wasif","Hunain","Anas"];

let dontCome = guestList[2];

console.log(dontCome, "have an personal issues he will not come");

guestList.splice(2, 1, "Hassan");

guestList.forEach(guest => console.log(`Salam ${guest}, would u like to dinner with me?`));