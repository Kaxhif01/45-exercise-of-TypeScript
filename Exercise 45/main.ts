type car = {
    manufacture: string
    model: string
    [key:string]: any;
}


function createCar(manufacture: string, model: string, optional: Record<string, any> ): car {

    return{
        manufacture,
        model,
        ...optional

    }
}

const myCar: car = createCar("Kia", "Sportage", {color: "Blue", year: 2022});
console.log(myCar);