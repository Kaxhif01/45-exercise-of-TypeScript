//Array of current users
let current_users = ["Anas", "hunain", "Wasif", "Kashif", "Arooj"];

//Array of new users
let new_users = ["Maliha", "Noor", "Hunain", "Areeba", "Kashif"];

//loop through new_users to check for username availability
new_users.forEach(new_one_user => {

    //making a condition for username already exist n save in our_condition varaible
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

//print different messages using if else statement
if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)
}else{
    console.log(`This Username ${new_one_user} is available`)
} 

});