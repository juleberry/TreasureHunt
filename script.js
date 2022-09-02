// *-*-*-*-*-*-*-*-*-*-*-*
// **** TREASURE HUNT ****
// *-*-*-*-*-*-*-*-*-*-*-*

// store values for the Rounds, treasuresFound and treasureMap indices
let round = 0;
// let search = treasureMap[0]
let currentRound = round + 1
let num = 0
let token = 0

// use below for testing
// let treasureMap = [
//   1,
//   "Treasure 6",
//   7,
//   6,
//   "Treasure 5",
//   9,
//   10,
//   "Treasure 3",
//   12,
//   11,
//   3,
//   "Treasure 1",
//   13,
//   "Treasure 4",
//   8,
//   2,
//   "Treasure 7",
//   4,
//   5,
//   "Treasure 2",
// ];

// -- begin creation of sorted treasure map --
let treasureMap = []

const loadMap = () => {
  // create array to hold numbers from 1-20 and the 7 treasure locations will replace 7 of the numbers
  // create array of treasures 'T'; default is 7 (can be expanded later)
  // add number to each "T" to test indexOf for testing
  // -----
  const treasures = []
  for (i = 1; i <= 7; i++) {
    treasures.push('Treasure ' + i);
  }
  // -----

  // array of numbers 1 through 20
  // treasure locations will need to subtract from the amount of treasures "hidden" within the game
  // -----
  const treasureLocations = []
  for (i = 1; i <= 20 - treasures.length; i++) {
    treasureLocations.push(i)
  }
  // -----

  // join arrays treasureLocations and treasures into new array, treasure map with concat method
  // -----
  treasureMap = treasureLocations.concat(treasures)
  // -----

  // --- shuffle treasures within treasureMap
  const shuffle = (totalTreasures) => {
  // randomly sort the treasures within the array
    totalTreasures.sort(() => Math.random() - 0.5)
    return;
  }
  // shuffles treasureMap
  // -----
  shuffle(treasureMap)
  console.log(treasureMap)
  // ----
  };
  // --- end of sorted treasure map section ---

//  -- set up players - class --
// window prompt to enter name and choices for later
// let humanName = prompt("Please enter your name");
// let humanChoice = prompt("Pick a number from 1-5");
let humanName = "Player 1";
// using random number for humanChoice while creating the code, change later
// create 5 buttons and click will be user input for variable humanChoice
let humanChoice = Math.floor(Math.random() * 5) + 1;
let cpuChoice = Math.floor(Math.random() * 5) + 1;

class Player {
  constructor(name, choice, treasuresFound) {
    (this.name = name), // activate window prompt later
    (this.choice = choice), // connect choice buttons to images later
    (this.treasuresFound = token),
    (this.revealTreasure = this.revealTreasure.bind(this));
  }
  // determine if treasure was found by testing for a string
  revealTreasure(index) {
    let num = index
    let search = treasureMap[index]
    if (currentRound <= treasureMap.length) {
    if (typeof search === "string") {
      if (isWinner) {
      console.log(`X marks the spot! ${this.name} found a treasure!`);
      // increase winner's found treasures by 1
      this.treasuresFound = token++
      // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1 and return to showChoices()
      num++
      nextRound()
      }
    } else if (typeof search === "string") {
      if (!isWinner) {
      console.log('A treasure was left behind!')
      // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1 and return to showChoices()
      num++
      nextRound()
      }
    } else {
      console.log(`Oh no! ${this.name} found a rock!`);
      // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1 and return to showChoices()
      num++
      nextRound()
    }
  }
}
}

const humanPlayer = new Player(humanName, humanChoice, token);
const cpuPlayer = new Player("CPU", cpuChoice, token);

// randomly determine which player chooses first
const firstChoice = () => {
  console.log("Let's see who chooses first...")
  let human = Math.floor(Math.random() * 2) + 1;
  let cpu = Math.floor(Math.random() * 2) + 1;
  if (human === cpu) {
    console.log(`${humanPlayer.name} chooses first!`);
    showChoices()
  } else {
    console.log(`${cpuPlayer.name} chooses first!`);
    showChoices()
  }
};

// to win space, code will check if contents of the array index is a string (true or false) and will output the winner based on comparison of user's chosen number vs cpu's randomized number between 1 and maybe 6
const showChoices = () => {
if (humanChoice > cpuChoice) {
  console.log(`${humanPlayer.name} chooses ${humanPlayer.choice}.`);
  console.log(`${cpuPlayer.name} chose ${cpuPlayer.choice}.`);
  pickSpot()
  } else {
  console.log(`${humanPlayer.name} chooses ${humanPlayer.choice}.`);
  console.log(`${cpuPlayer.name} chose ${cpuPlayer.choice}.`);
  pickSpot()
  }
}
const pickSpot = () => {
  while (currentRound <= 19) {
    if (isTie() === true) {
      console.log(`It's a tie! Let's see if there was a treasure...`);
      cpuPlayer.revealTreasure(round)
    } else if (isWinner() === true) {
      console.log(`${humanPlayer.name} digs for a treasure!\nLet's see what you found...`);
      // then reveal if space is treasure and log to winner's score
      humanPlayer.revealTreasure(round)
    } else {
      console.log(`${cpuPlayer.name} digs for a treasure!\nLet's see if there was a treasure...`);
      // then reveal if space is treasure and do not log to any player's 
      cpuPlayer.revealTreasure(round)
    }
  }
}

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

const nextRound = () => {
  round++
  currentRound++
  console.log(`Round ${currentRound}\nGet ready to choose a space...`)
  showChoices()
}

// ------------------------
//   **** START GAME ****
// ------------------------
const startGame = () => {
  console.log(`Round ${currentRound}`)
  loadMap()
  firstChoice()
  endGame()
}

// =================
// *** END GAME ***
// =================
// Game will end and reveal the total of how many treasures found and determine winner of entire game
const endGame = () => {
  console.log(`It's been a great treasure hunt!\nLet's see who won...`)
  if (humanPlayer.treasuresFound > cpuPlayer.treasuresFound) {
    console.log(`${humanPlayer.name} collected ${humanPlayer.treasuresFound} treasures.`)
    console.log(`${cpuPlayer.name} collected ${cpuPlayer.treasuresFound} treasures.`)
    console.log(`${humanPlayer.name} wins!`)
  } else if (humanPlayer.treasuresFound === cpuPlayer.treasuresFound) {
    console.log(`${cpuPlayer.name} collected ${cpuPlayer.treasuresFound} treasures.`)
    console.log(`${humanPlayer.name} collected ${humanPlayer.treasuresFound} treasures.`)
    console.log(`It's a tie! Please play again.`)
  } else {
    console.log(`${humanPlayer.name} collected ${humanPlayer.treasuresFound} treasures.`)
    console.log(`${cpuPlayer.name} collected ${cpuPlayer.treasuresFound} treasures.`)
    console.log(`${cpuPlayer.name} wins! Better luck next time.`)
  }
}

// gameplay buttons
let startButton = document.getElementById('start');
  startButton.addEventListener('click', () => {
    startGame()
  });