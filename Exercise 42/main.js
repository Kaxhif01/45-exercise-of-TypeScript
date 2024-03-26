function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["Kashif", "Wasif", "Hunain"];
show_magicians(magician);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The great";
    }
}
var magicians2 = ["Kashif", "Wasif", "Hunain"];
make_great(magicians2);
show_magicians(magicians2);
