//describe a function

function describe_city(city: string, nation: string = "Pakistan"){
    console.log(`${city} is in ${nation}`);
}

//calling the function
describe_city("Karachi");

describe_city("Lahore");

describe_city("Paris", "France");