// *-*-*-*-*-*-*-*-*-*-*-*
// **** TREASURE HUNT ****
// *-*-*-*-*-*-*-*-*-*-*-*

// create array to hold numbers from 1-20 and the 7 treasure locations will replace 7 of the numbers
// create array of treasures 't'; default is 7 (can be expanded later)
const treasures = []
for ( i = 1; i <= 7; i++) {
  treasures.push('t');
}

// array of numbers 1 through 20
const treasureLocations = []
for ( i = 1; i <= 20; i++) {
  treasureLocations.push(i)
}

// join arrays treasureLocations and treasures into new array, treasure map with concat method
const treasureMap = treasureLocations.concat(treasures)

// console.log(treasureMap)

const shuffle = (totalTreasures) => {
  // randomly sort the treasures within the array
  totalTreasures.sort(() => Math.random() - 0.5);
}
  shuffle(treasureMap)
  console.log(treasureMap)

  // next code block
  // to win space, code will check if contents of the array index is a string (true or false) and will output the winner based on comparison of user's chosen number vs cpu's randomized number between 1 and maybe 6
