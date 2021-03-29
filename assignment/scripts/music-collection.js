console.log('***** Music Collection *****')
// Create a collection variable (empty array)
let collection = [];

// Create addToCollection function
function addToCollection (title, artist, yearPublished) {
  let newObject = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(newObject);
  return newObject;
}
// Calling & testing addToCollection function
console.log(addToCollection('Set in Stone', 'Stick Figure', 2016));
console.log(addToCollection('World on Fire', 'Stick Figure', 2019));
console.log(addToCollection('College Dropout', 'Kanye West', 2005));
console.log(addToCollection('Late Registration', 'Kanye West', 2006));
console.log(addToCollection('The Cool', 'Lupe Fiasco', 2008));
console.log(addToCollection('The Low End Theory', 'A Tribe Called Quest', 1993));
console.log('TEST - should show 6 albums w/ info:', collection);

// Create showCollection function
function showCollection (array) {
  console.log(array.length);
  // TEST - console.log('in showCollection function', array);
  for (let item of array){
  // TEST - console.log('in showCollection for loop', array);
    console.log(`${item['title']} by ${item['artist']} published in ${item['yearPublished']}`);
  }
}
showCollection(collection); // Calling & testing function

// Create findByArtist function
function findByArtist(artist){
  let results = [];
  // TEST - console.log('In findByArtist function', artist);
   for (let item of collection){
    // TEST - console.log('In for loop', artist);
    if (artist == item['artist']) {
      results.push(artist);
      // TEST - console.log('In if', artist);
    }
  }
  return results
}
console.log(findByArtist('Stick Figure')); // Calling and testing function
