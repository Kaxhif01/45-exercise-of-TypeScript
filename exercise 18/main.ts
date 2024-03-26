// Making a array of countries and print its original order
let placetoVisit: string[] = ["Germany", "China", "France", "Argentina", "Malaysia"];
console.log("original order:", placetoVisit);

// Print the array in alphabetical order without modify actual list
console.log("Alphabetical Order:", [...placetoVisit].sort());

// show that the array is still in its original order
console.log("Still in original Order", placetoVisit);

// Print the array in reverse alphabetical order without modify actual list
console.log("Reverse Alphabetical Order", [...placetoVisit].reverse());

// show that the array is still in its original order
console.log("Still in original Order", placetoVisit);

// We have changes the orogonal array order now
console.log("Original Array Reverse", placetoVisit.reverse());

// Print the array to show that its back to its original order
console.log("Back to Original Order", placetoVisit.reverse());

console.log("Sorted in Alphabetical Order", placetoVisit.sort());

// We have change again the oroginal array order now in reverse order again
console.log("Original Array Reverse Again", placetoVisit.reverse());


