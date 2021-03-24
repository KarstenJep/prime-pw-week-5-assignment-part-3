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
