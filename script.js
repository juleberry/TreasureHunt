// *-*-*-*-*-*-*-*-*-*-*-*
// **** TREASURE HUNT ****
// *-*-*-*-*-*-*-*-*-*-*-*

// -- create sorted treasure map --
const loadMap = () => {
  // create array to hold numbers from 1-20 and the 7 treasure locations will replace 7 of the numbers
  // create array of treasures 'T'; default is 7 (can be expanded later)
  // add number to each "T" to test indexOf for testing
  // -----
  // const treasures = []
  // for (i = 1; i <= 7; i++) {
  //   treasures.push('Treasure ' + i);
  // }
  // -----

  // array of numbers 1 through 20
  // treasure locations will need to subtract from the amount of treasures "hidden" within the game
  // use code below for gameplay
  // -----
  // const treasureLocations = []
  // for (i = 1; i <= 20 - treasures.length; i++) {
  //   treasureLocations.push(i)
  // }
  // -----

  // join arrays treasureLocations and treasures into new array, treasure map with concat method
  // use code below for gameplay
  // -----
  // const treasureMap = treasureLocations.concat(treasures)
  // -----
  // use below for testing
  let treasureMap = [
    1,
    "Treasure 6",
    7,
    6,
    "Treasure 5",
    9,
    10,
    "Treasure 3",
    12,
    11,
    3,
    "Treasure 1",
    13,
    "Treasure 4",
    8,
    2,
    "Treasure 7",
    4,
    5,
    "Treasure 2",
  ];
  // tested location of treasure 5
  // console.log(treasureMap.indexOf("T5"))
  console.log(treasureMap);

  // --- shuffle treasures within treasureMap
  // const shuffle = (totalTreasures) => {
  // randomly sort the treasures within the array
  //   totalTreasures.sort(() => Math.random() - 0.5)
  //   return;
  // }
  // shuffles treasureMap
  // -----
  // shuffle(treasureMap)
  // console.log(treasureMap)
  // ----
  // store values for the Rounds and treasureMap indices
  let round = 0;
  // let search = treasureMap[0]
  let currentRound = round + 1
};

//  -- set up players - class --
// window prompt to enter name and choices for later
// let humanName = prompt("Please enter your name");
// let humanChoice = prompt("Pick a number from 1-5");
let humanName = "Player 1";
// using random number for humanChoice while creating the code, change later
// create 5 buttons and click will be user input for variable humanChoice
let humanChoice = Math.floor(Math.random() * 5) + 1;
let cpuChoice = Math.floor(Math.random() * 5) + 1;
// console.log(humanChoice)

class Player {
  constructor(name, choice, treasuresFound) {
    (this.name = name), // activate window prompt later
      (this.choice = choice), //
      (this.treasuresFound = treasuresFound),
      (this.revealTreasure = this.revealTreasure.bind(this));
  }
  // determine if treasure was found by testing for a string
  revealTreasure(search) {
    let i = 0
    let search = treasureMap[i]
    if (typeof search === "string" && isWinner === true) {
      console.log(`X marks the spot! ${this.name} found a treasure!`);
      // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1
    } else if (typeof search === "string" && isWinner === false) {
      console.log('A treasure was left behind!')
      // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1
    } else {
      console.log(`Oh no! ${this.name} found a rock!`);
      // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1
    }
  }
}

const humanPlayer = new Player(humanName, humanChoice);
const cpuPlayer = new Player("CPU", cpuChoice);

// randomly determine which player chooses first
const firstChoice = () => {
  let human = Math.floor(Math.random() * 2) + 1;
  let cpu = Math.floor(Math.random() * 2) + 1;
  if (human === cpu) {
    console.log(`${humanPlayer.name} chooses first!`);
    console.log(`${humanPlayer.name} chooses ${humanPlayer.choice}. `);
    console.log(`${cpuPlayer.name} chose ${cpuPlayer.choice}`);

    pickSpot()
  } else {
    console.log(`The computer chooses first!`);
    console.log(`${cpuPlayer.name} chose ${cpuPlayer.choice}`);
    console.log(`${humanPlayer.name} chooses ${humanPlayer.choice}. `);
    pickSpot()
  }
};

// to win space, code will check if contents of the array index is a string (true or false) and will output the winner based on comparison of user's chosen number vs cpu's randomized number between 1 and maybe 6
const pickSpot = () => {
  if (isTie() === true) {
    console.log(`It's a tie! Let's see if there was a treasure...`);
    cpuPlayer.revealTreasure(search)
  } else if (isWinner() === true) {
    console.log(`${humanPlayer.name} wins this space! Let's see if there was a treasure...`);
    // then reveal if space is treasure and log to winner's score
    humanPlayer.revealTreasure(search)
  } else {
    console.log(`${cpuPlayer.name} wins this space! Let's see if there was a treasure...`);
    // then reveal if space is treasure and do not log to any player's score
    cpuPlayer.revealTreasure(search)
  }
};
const isTie = () => {
  if (humanChoice === cpuChoice) {
    return true;
  } else {
    return false;
  }
};
const isWinner = () => {
  if (humanChoice > cpuChoice) {
    return true;
  } else {
    return false;
  }
};

// testing function -- remove later
// console.log('should be zero =>' + round)
// console.log('The current round should be one =>' + currentRound)
// console.log('the space is currently => ' + search)
// console.log(isString(search))
// round++
// currentRound++
// search = treasureMap[1]
// console.log('should be 1 =>' + round)
// console.log('The current round should be two =>' + currentRound)
// console.log('the space is currently => ' + search)
// console.log(isString(search))
// -----

// ------------------------
//   **** START GAME ****
// ------------------------
// const startGame = () => {
//   loadMap()
//   firstChoice()
// }

// startGame()
