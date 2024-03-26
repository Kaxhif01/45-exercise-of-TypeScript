//Array of current users
var current_users = ["Anas", "hunain", "Wasif", "Kashif", "Arooj"];
//Array of new users
var new_users = ["Maliha", "Noor", "Hunain", "Areeba", "Kashif"];
//loop through new_users to check for username availability
new_users.forEach(function (new_one_user) {
    //making a condition for username already exist n save in our_condition varaible
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print different messages using if else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
