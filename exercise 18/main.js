var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print its original order
var placetoVisit = ["Germany", "China", "France", "Argentina", "Malaysia"];
console.log("original order:", placetoVisit);
// Print the array in alphabetical order without modify actual list
console.log("Alphabetical Order:", __spreadArray([], placetoVisit, true).sort());
// show that the array is still in its original order
console.log("Still in original Order", placetoVisit);
// Print the array in reverse alphabetical order without modify actual list
console.log("Reverse Alphabetical Order", __spreadArray([], placetoVisit, true).reverse());
// show that the array is still in its original order
console.log("Still in original Order", placetoVisit);
// We have changes the orogonal array order now
console.log("Original Array Reverse", placetoVisit.reverse());
// Print the array to show that its back to its original order
console.log("Back to Original Order", placetoVisit.reverse());
console.log("Sorted in Alphabetical Order", placetoVisit.sort());
// We have change again the oroginal array order now in reverse order again
console.log("Original Array Reverse Again", placetoVisit.reverse());
