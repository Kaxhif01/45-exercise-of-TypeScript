// define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["orange", "Banana", "Pineapple"];
// test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is equal to apple?");
console.log(apple != "apple");
// test using lowercase funtions
console.log("\nIs APPLE is equal to apple after convereting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after convereting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numericals test
//equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nIs ten is greatwer than 0?");
console.log(ten > 0);
//less than
console.log("\nIs twenty is less than ten?");
console.log(twenty < ten);
// greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
//test using "and" and "or" operators
//using and (&&)
console.log("\nIs twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\nIS twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
// using or (||)
console.log("\ntwenty is greater than 50 or 20 is equal to 20?");
console.log(twenty > 50 || twenty == 20);
console.log("\ntwenty is greater than 50 or 20 is not equal to 20?");
console.log(twenty > 50 || twenty != 20);
//test whether item is include in array
console.log("\nIs orange is include in my fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\nIs orange is not include in my fruits array");
console.log(!fruits.includes("orange"));
