 function sandwich(...items: string[]): void {

    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)

    }
 }

  
 
console.log("enjoy your sandwich Kashif Qamar");

sandwich("Chicken", "Beef", "Tomato");
sandwich("Fajita", "Mayo sauce", "Chicken garlic");
sandwich("Pepporoni", "Mutton", "club");


