console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
//Create an empty array named myCollection.
let myCollection =[]
//Create a function named addToCollection.  
//This function should:
//Take in a collection parameter. (This allows the function to be reused to add an album to any array of album objects.)
//Take in the album's title, artist, yearPublished as parameters.
//Create a new object having the above properties.
//NOTE: Your object's properties must have title, artist, and yearPublished in order for this assignment's automated tests to work correctly!


function addToCollection(collection, title, artist, yearPublished) {
  // your code here...
let album = {
  
  title: title, 
  artist: artist,
  yearPublished: yearPublished
}
  collection.push(album)
  return album;
}
/*Add the new object to the end of the collection array.
return the newly created object.
Use and Test the addToCollection function:
*/
console.log(addToCollection(myCollection, 'The National', 'The National', 1994))

console.log(addToCollection(myCollection, 'Ben Folds', 'The Best Imitation of Myself', 2011))

console.log(addToCollection(myCollection, 'Modest Mouse', 'Good News for People Who Love Bad News', 2004))

console.log(addToCollection(myCollection, 'Wilco', 'Yankee Foxtrot Hotel', 1996))

console.log(addToCollection(myCollection, 'U2', 'Achtung Baby', 1990))

console.log(addToCollection(myCollection, 'The Smile', 'Wall of Eyes', 2024)

console.log(myCollection);

/*Add 6 albums to the myCollection array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
console.log each album as added using the function's returned value. */
// After all are added, console.log the myCollection array.

/*Create a function named showCollection. This function should:

Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
Loop through the collection and console.log each album's information formatted within a single string, like: TITLE by ARTIST, published in YEARPUBLISHED.
Test the showCollection function.*/

/*
Add a function named findByArtist. This function should:

Take in a collection parameter. Remember, we want to be able to search any collection!
Take in an artist (string) parameter.
Create an empty array to hold any matching results, if any.
Loop through the collection and add any album objects with a matching artist to the array.
Return the array with the matching results. (If no results are found, an empty array should be returned.)
Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.
*/

When testing your functions, write all tests in the JavaScript file!

*/




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
