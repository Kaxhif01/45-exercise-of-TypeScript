//describe a function
function describe_city(city, nation) {
    if (nation === void 0) { nation = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(nation));
}
//calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Paris", "France");
