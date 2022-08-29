// *-*-*-*-*-*-*-*-*-*-*-*
// **** TREASURE HUNT ****
// *-*-*-*-*-*-*-*-*-*-*-*

// -- create treasure map --

// create array to hold numbers from 1-20 and the 7 treasure locations will replace 7 of the numbers
// create array of treasures 'T'; default is 7 (can be expanded later)
// add number to each "T" to test indexOf for testing
const treasures = []
for (i = 1; i <= 7; i++) {
  treasures.push('Treasure ' + i);
}

// array of numbers 1 through 20
// treasure locations will need to subtract from the amount of treasures "hidden" within the game
// use code below for gameplay
// const treasureLocations = []
// for (i = 1; i <= 20 - treasures.length; i++) {
//   treasureLocations.push(i)
// }
// -----

// join arrays treasureLocations and treasures into new array, treasure map with concat method
// use code below for gameplay
// const treasureMap = treasureLocations.concat(treasures)
// -----
// use below for testing
const treasureMap = [1, 'Treasure 6', 7, 6, 'Treasure 5', 9, 10, 'Treasure 3', 12, 11, 3, 'Treasure 1', 13, 'Treasure 4', 8, 2, 'Treasure 7', 4, 5, 'Treasure 2']

// console.log(treasureMap)

// --- shuffle treasures within treasureMap
// const shuffle = (totalTreasures) => {
//   // randomly sort the treasures within the array
//   totalTreasures.sort(() => Math.random() - 0.5)
//   return;
// }
// shuffles treasureMap
  // shuffle(treasureMap)
  // console.log(treasureMap)
// ----

// tested location of treasure 5
  // console.log(treasureMap.indexOf("T5"))

  // next code block
  // to win space, code will check if contents of the array index is a string (true or false) and will output the winner based on comparison of user's chosen number vs cpu's randomized number between 1 and maybe 6

  // set up players
  // window prompt to enter name and choices for later
  // let humanName = prompt("Please enter your name");
  // let humanChoice = prompt("Pick a number from 1-5");
  let humanName = 'Player 1'
  // using random number for humanChoice while creating the code, change later
  let humanChoice = Math.floor(Math.random() * 5) + 1;
  let cpuChoice = Math.floor(Math.random() * 5) + 1;
  // console.log(humanChoice)

  class Player {
    constructor(name, choice, treasuresFound) {
      this.name = humanName,
      this.choice = humanChoice,
      this.treasuresFound = treasuresFound
    }
  }

    const humanPlayer = new Player(humanName, humanChoice)
    const cpuPlayer = new Player('CPU', cpuChoice)

// testing gameplay function -- determine if treasure found
let round = 0;
let search = treasureMap[0]
let currentRound = round + 1

// determine if treasure was found by testing for a string
const isString = (value) => { 
	if (typeof value === "string") {
    console.log(`X marks the spot! YOU/CPU found a treasure!`)
		return true;
	} else {
    console.log(`Oh no! YOU/CPU found a rock.`)
    return false;
  }
}
// testing function -- remove later
console.log('should be zero =>' + round)
console.log('The current round should be one =>' + currentRound)
console.log('the space is currently => ' + search)
console.log(isString(search))
round++
currentRound++
search = treasureMap[1]
console.log('should be 1 =>' + round)
console.log('The current round should be two =>' + currentRound)
console.log('the space is currently => ' + search)
console.log(isString(search))
// -----

    const startGame = () => {
      
    }