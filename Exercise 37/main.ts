//making a shirt
function make_shirt(size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
};

//calling a function with by default values
make_shirt();

// calling a function with now with medium size and default message
make_shirt("Medium");

//calling a function now with small size n different message
make_shirt("Small", "I love Javascript n Python");

