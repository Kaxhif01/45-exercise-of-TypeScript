

function show_magicians(magicians: string[]): void {

    for (const magician of magicians)  {


        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }

}

function make_great(magicians: string[]): void {
    for (let i = 0;i < magicians.length; i++) {
        magicians[i] = magicians[i]  +  ` The great`
    }
}

const magicians2: string[] = ["Kashif", "Wasif", "Hunain"];


function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0;i < magicians.length; i++) {
        greatMagicians.push(magicians[i]  +  ` the Great`);
    }
    return greatMagicians;
}

const magicians3: string[] = ["Kashif", "Wasif", "Hunain"];

const greatMagicians2: string[] =make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);