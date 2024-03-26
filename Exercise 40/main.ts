//define make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    
    let album: {artist: string, title: string, tracks?: number} = {

        artist: artist_name,
        title: album_title,
    };

    if(tracks !== undefined){

        album.tracks = tracks;

         
    }

    return album;

};

// calling three functions and creating 3 varaibles with different values
     let album1 = make_album("Kashif", "Album title 1");

     let album2 = make_album("Hunain", "Album title 2");
      
     // calling a make album function with third parameter
     let album3 = make_album("Arooj", "Album title 3", 12);

     //print values of our object created by function

     console.log(album1);
     console.log(album2);
     console.log(album3);