console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
  let newObject = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(newObject);
  return newObject;
}

console.log(addToCollection('Set in Stone', 'Stick Figure', 2016));
console.log(addToCollection('World on Fire', 'Stick Figure', 2019));
console.log(addToCollection('College Dropout', 'Kanye West', 2005));
console.log(addToCollection('Late Registration', 'Kanye West', 2006));
console.log(addToCollection('The Cool', 'Lupe Fiasco', 2008));
console.log(addToCollection('The Low End Theory', 'A Tribe Called Quest', 1993));
console.log(collection);

function showCollection (array) {
  console.log(array.length);
  console.log('in showCollection');
  for (let i=0; i<array.length; i++){
    console.log(`${array[i]['title']} by ${array[i]['artist']} published in ${array[i]['yearPublished']}`);
  }
}
showCollection(collection);
console.log(collection);

//
function findByArtist(artist){
  let results = [];
  console.log('In findByArtist function', results);
  // for (let item of collection){
  for (let i=0; i<collection.length; i++){
    console.log('In for loop');
    if (artist == collection[i]['artist']) {
      results.push(artist);
      console.log('In if');
    }
  } return results
}
console.log(findByArtist(A Tribe Called Quest));
