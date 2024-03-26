var guestList = ["Kashif", "Wasif", "Hunain", "Anas"];
var dontCome = guestList[2];
console.log(dontCome, "have an personal issues he will not come");
guestList.splice(2, 1, "Hassan");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to dinner with me?")); });
