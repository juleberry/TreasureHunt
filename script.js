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
  // ----
  };
  // --- end of sorted treasure map section ---

//  -- set up players - class --
// human player will input name later
let humanName // to use inputted 'humanName' throughout the entire game, simply declare the variable

// using random number for humanChoice while creating the code, change later
// create 5 buttons and click will be user input for variable humanChoice
// let humanChoice = Math.floor(Math.random() * 5) + 1;
let humanChoice
let cpuChoice = Math.floor(Math.random() * 5) + 1;

class Player {
  constructor(name, choice, treasuresFound) {
    (this.name = name), // activate window prompt later
    (this.choice = choice), // connect choice buttons to images later
    (this.treasuresFound = token)
    // (this.revealTreasure = this.revealTreasure.bind(this));
  }
}
  // determine if treasure was found by testing for a string
  const revealTreasure = (index) => {
    let num = index
    let search = treasureMap[index]
    if (currentRound <= treasureMap.length) {
    if (typeof search === "string") {
      if (isWinner) {
      let mainGamePlay = document.createElement('p')
      let mainGameBox = document.getElementById('gameplay-area2')
      mainGameBox.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = `X marks the spot! A treasure was found!`;
      let introImg = document.getElementById('cartoonMap')
      introImg.classList.add('hidden')
let treasureImg = document.createElement('img')
    treasureImg.setAttribute('src', '/images/treasure-chest.png')
    treasureImg.classList.add('chest')
    mainGameBox.appendChild(treasureImg)
      // increase winner's found treasures by 1 -- fix this
      this.treasuresFound = token++
      // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1 and return to showChoices()
      num++
      let continueButton14 = document.createElement('button')
      let continueHome3 = document.getElementById('gameplay-area2')
      continueButton14.innerText = "Continue"
      continueButton14.classList.add('main-button')
      continueButton14.classList.add('dark')
      continueHome3.appendChild(continueButton14)
      continueButton14.addEventListener('click', () => {
        mainGamePlay.classList.add('hidden')
        continueButton14.classList.add('hidden')
        introImg.classList.remove('hidden')
        treasureImg.classList.add('hidden')
      nextRound()
      })
    }
    } else if (typeof search === "string") {
      if (!isWinner) {
      let mainGamePlay = document.createElement('p')
      let mainGameBox = document.getElementById('gameplay-area2')
      mainGameBox.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = 'A treasure was left behind!'
      let introImg = document.getElementById('cartoonMap')
      introImg.classList.add('hidden')
let treasureImg = document.createElement('img')
    treasureImg.setAttribute('src', '/images/treasure-chest.png')
    mainGameBox.appendChild(treasureImg)
    treasureImg.classList.add('chest')
      num++
      let continueButton14 = document.createElement('button')
      let continueHome3 = document.getElementById('gameplay-area2')
      continueButton14.innerText = "Continue"
      continueButton14.classList.add('main-button')
      continueButton14.classList.add('dark')
      continueHome3.appendChild(continueButton14)
      continueButton14.addEventListener('click', () => {
        mainGamePlay.classList.add('hidden')
        continueButton14.classList.add('hidden')
        introImg.classList.remove('hidden')
        treasureImg.classList.add('hidden')
      nextRound()
      })
    }
    } else {
      let mainGamePlay = document.createElement('p')
      let mainGameBox = document.getElementById('gameplay-area2')
      mainGameBox.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = `Oh no! It was just a rock!`;
      let introImg = document.getElementById('cartoonMap')
      introImg.classList.add('hidden')
      let rockImg = document.createElement('img')
    rockImg.setAttribute('src', '/images/rock01.png')
    rockImg.style.width = '20%'
    rockImg.classList.add('rock')
    mainGameBox.appendChild(rockImg)
      num++
      let continueButton14 = document.createElement('button')
      let continueHome3 = document.getElementById('gameplay-area2')
      continueButton14.innerText = "Continue"
      continueButton14.classList.add('main-button')
      continueButton14.classList.add('dark')
      continueHome3.appendChild(continueButton14)
      continueButton14.addEventListener('click', () => {
        rockImg.classList.add('hidden')
        mainGamePlay.classList.add('hidden')
        continueButton14.classList.add('hidden')
        introImg.classList.remove('hidden')
      nextRound()
      })
    }
  }
}
  

const finalReveal = (index) => {
  let num = index
  let search = treasureMap[index]
  if (currentRound === treasureMap.length) {
  if (typeof search === "string") {
    if (isWinner) {
    let mainGamePlay = document.createElement('p')
      let mainGameBox = document.getElementById('gameplay-area2')
      mainGameBox.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = `X marks the spot! A treasure was found!`;
      let treasureImg = document.createElement('img')
    treasureImg.setAttribute('src', '/images/treasure-chest.png')
    treasureImg.classList.add('chest')
    mainGameBox.appendChild(treasureImg)
    // increase winner's found treasures by 1 -- fix this
    this.treasuresFound = token++
    // then, increase Round by 1, currentRound by 1, and treasureMap[i] by 1 and return to showChoices()
    let continueButton15 = document.createElement('button')
      let continueHome4 = document.getElementById('gameplay-area2')
      continueButton15.innerText = "Continue"
      continueButton15.classList.add('main-button')
      continueButton15.classList.add('dark')
      continueHome4.appendChild(continueButton15)
      continueButton15.addEventListener('click', () => {
        mainGamePlay.classList.add('hidden')
        continueButton15.classList.add('hidden')
        treasureImg.classList.add('hidden')
        window.location = '#gameplay-area3';
      endGame()
    })
  }
  } else if (typeof search === "string") {
    if (!isWinner) {
      let mainGamePlay = document.createElement('p')
      let mainGameBox = document.getElementById('gameplay-area2')
      mainGameBox.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = 'A treasure was left behind!'
      let introImg = document.getElementById('cartoonMap')
      introImg.classList.add('hidden')
      let treasureImg = document.createElement('img')
      treasureImg.setAttribute('src', '/images/treasure-chest.png')
      treasureImg.classList.add('chest')
      mainGameBox.appendChild(treasureImg)
    let continueButton15 = document.createElement('button')
      let continueHome4 = document.getElementById('gameplay-area2')
      continueButton15.innerText = "Keep Digging!"
      continueButton15.classList.add('main-button')
      continueButton15.classList.add('dark')
      continueHome4.appendChild(continueButton14)
      continueButton15.addEventListener('click', () => {
        mainGamePlay.classList.add('hidden')
        continueButton15.classList.add('hidden')
        introImg.classList.remove('hidden')
        treasureImg.classList.add('hidden')
        window.location = '#gameplay-area3';
    endGame()
    })
  }
  } else {
    let mainGamePlay = document.createElement('p')
      let mainGameBox = document.getElementById('gameplay-area2')
      mainGameBox.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = `Oh no! ${this.name} found a rock!`;
      let introImg = document.getElementById('cartoonMap')
      introImg.classList.add('hidden')
      let rockImg = document.createElement('img')
    rockImg.setAttribute('src', '/images/rock01.png')
    rockImg.style.width = '20%'
    rockImg.classList.add('rock')
    mainGameBox.appendChild(rockImg)
    let continueButton15 = document.createElement('button')
      let continueHome4 = document.getElementById('gameplay-area2')
      continueButton15.innerText = "Continue"
      continueButton15.classList.add('main-button')
      continueButton15.classList.add('dark')
      continueHome4.appendChild(continueButton14)
      continueButton15.addEventListener('click', () => {
        rockImg.classList.add('hidden')
        mainGamePlay.classList.add('hidden')
        continueButton15.classList.add('hidden')
        introImg.classList.remove('hidden')
        window.location = '#gameplay-area3';
    endGame()
      })
    }
  }
}

const humanPlayer = new Player(humanName, humanChoice, token);
const cpuPlayer = new Player("CPU", cpuChoice, token);

// prompt user for input from 1 - 5
const userChoicePrompt = () => {
  let userChoice = prompt('Choose a number between 1 and 5', '1, 2, 3, 4, or 5')
  if (userChoice != null) {
humanChoice = userChoice
showChoices()
  } else {
    userChoicePrompt()
  }
}


// randomly determine which player chooses first
const firstChoice = () => {
  let mainGamePlay = document.createElement('p')
  let mainGameBox = document.getElementById('gameplay-area2')
  mainGameBox.appendChild(mainGamePlay)
  mainGamePlay.classList.add('game-text2')
  mainGamePlay.innerText = `Let's see who chooses first...  \n Click "Randomize"`
  let randomPlayer = document.createElement('button')
  mainGameBox.appendChild(randomPlayer)
  randomPlayer.classList.add('main-button')
  randomPlayer.innerText = "Randomize"
  randomPlayer.addEventListener('click', () => {
  let human = Math.floor(Math.random() * 2) + 1;
  let cpu = Math.floor(Math.random() * 2) + 1;
  if (human === cpu) {
    randomPlayer.classList.add('hidden')
    mainGamePlay.innerText = `${humanName} chooses first!`
    let continueButton10 = document.createElement('button')
    let continueHome2 = document.getElementById('gameplay-area2')
    continueButton10.innerText = "Continue"
    continueButton10.classList.add('main-button')
    continueButton10.classList.add('dark')
    continueHome2.appendChild(continueButton10)
    continueButton10.addEventListener('click', () => {
      mainGamePlay.classList.add('hidden')
      continueButton10.classList.add('hidden')
      userChoicePrompt()
    })
  } else {
    let introImg = document.getElementById('cartoonMap')
    mainGameBox.appendChild(introImg)
    randomPlayer.classList.add('hidden')
    introImg.classList.add('hidden')
    let pirateImg = document.createElement('img')
    pirateImg.setAttribute('src', '/images/pirate-player.png')
    pirateImg.style.width = '20%'
    pirateImg.classList.add('pirate')
    mainGameBox.appendChild(pirateImg)
    mainGamePlay.innerText = `${cpuPlayer.name} chooses first!`;
    let continueButton11 = document.createElement('button')
    let continueHome3 = document.getElementById('gameplay-area2')
    continueButton11.innerText = "Continue"
    continueButton11.classList.add('main-button')
    continueButton11.classList.add('dark')
    continueHome3.appendChild(continueButton11)
    continueButton11.addEventListener('click', () => {
      mainGamePlay.classList.add('hidden')
      pirateImg.classList.add('hidden')
      continueButton11.classList.add('hidden')
      introImg.classList.remove('hidden')
      userChoicePrompt()
    })
  }
  })
}

// to win space, code will check if contents of the array index is a string (true or false) and will output the winner based on comparison of user's chosen number vs cpu's randomized number between 1 and maybe 6
const showChoices = () => {
  humanPlayer.name = humanName
    if (humanChoice > cpuChoice) {
    let mainGamePlay2 = document.createElement('p')
    let mainGameBox2 = document.getElementById('gameplay-area2')
    mainGamePlay2.classList.add('game-text2')
    mainGameBox2.appendChild(mainGamePlay2)
    mainGamePlay2.innerText = `${humanPlayer.name} chooses ${humanChoice}.\n${cpuPlayer.name} chose ${cpuPlayer.choice}.`
    let continueButton12 = document.createElement('button')
    let continueHome4 = document.getElementById('gameplay-area2')
    continueButton12.innerText = "Continue"
    continueButton12.classList.add('main-button')
    continueButton12.classList.add('dark')
    continueHome4.appendChild(continueButton12)
    continueButton12.addEventListener('click', () => {
      mainGamePlay2.classList.add('hidden')
      continueButton12.classList.add('hidden')
      pickSpot()
    })
  } else {
    let mainGamePlay2 = document.createElement('p')
    let mainGameBox2 = document.getElementById('gameplay-area2')
    mainGamePlay2.classList.add('game-text2')
    mainGameBox2.appendChild(mainGamePlay2)
    mainGamePlay2.innerText = `${humanPlayer.name} chooses ${humanChoice}.\n${cpuPlayer.name} chose ${cpuPlayer.choice}.`
    let continueButton13 = document.createElement('button')
    let continueHome5 = document.getElementById('gameplay-area2')
    continueButton13.innerText = "Continue"
    continueButton13.classList.add('main-button')
    continueButton13.classList.add('dark')
    continueHome5.appendChild(continueButton13)
    continueButton13.addEventListener('click', () => {
      mainGamePlay2.classList.add('hidden')
      continueButton13.classList.add('hidden')
      pickSpot()
    })
  }
}

const pickSpot = () => {
  if (currentRound <= 19) {
    if (isTie() === true) {
      console.log('we made it to line 348')
      let mainGamePlay = document.createElement('p')
      let mainGameBox2 = document.getElementById('gameplay-area2')
      mainGameBox2.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = `It's a tie! Let's see if there was a treasure...`;
      let continueButton3 = document.createElement('button')
      continueButton3.innerText = "Next"
      continueButton3.classList.add('main-button')
      continueButton3.classList.add('dark')
      mainGameBox2.appendChild(continueButton3)
      continueButton3.addEventListener('click', () => {
        mainGamePlay.classList.add('hidden')
        continueButton3.classList.add('hidden')
        // cpuPlayer.revealTreasure(round)
        revealTreasure(round)
        
      })
    } else if (isWinner() === true) {
      let mainGameBox2 = document.getElementById('gameplay-area2')
      let mainGamePlay = document.createElement('p')
      mainGameBox2.appendChild(mainGamePlay)
      mainGamePlay.classList.add('game-text2')
      mainGamePlay.innerText = `${humanPlayer.name} digs for a treasure!\nLet's see what you found...`
      let continueButton4 = document.createElement('button')
      continueButton4.innerText = "Continue"
      continueButton4.classList.add('main-button')
      continueButton4.classList.add('dark')
      mainGameBox2.appendChild(continueButton4)
      continueButton4.addEventListener('click', () => {
        mainGamePlay.classList.add('hidden')
      continueButton4.classList.add('hidden')
      // humanPlayer.revealTreasure(round)
      revealTreasure(round)
    })
  } else {
    let mainGamePlay = document.createElement('p')
    let mainGameBox2 = document.getElementById('gameplay-area2')
    mainGamePlay.classList.add('game-text2')
    mainGameBox2.appendChild(mainGamePlay)
      mainGamePlay.innerText = `${cpuPlayer.name} digs for a treasure!\nLet's see if there was a treasure...`;
      // then reveal if space is treasure and do not log to any player's
      let continueButton5 = document.createElement('button')
      continueButton5.innerText = "Continue"
      continueButton5.classList.add('main-button')
      continueButton5.classList.add('dark')
      mainGameBox2.appendChild(continueButton5)
      continueButton5.addEventListener('click', () => {
        mainGamePlay.classList.add('hidden')
      continueButton5.classList.add('hidden')
      // cpuPlayer.revealTreasure(round)
      revealTreasure(round)
      })
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
  let announceRound = document.getElementById('game-round')
  announceRound.innerText = `Round ${currentRound}`
  if (currentRound === 20) {
      if (isTie() === true) {
      let mainGamePlay = document.createElement('p')
      let mainGameBox2 = document.getElementById('gameplay-area2')
      mainGamePlay.classList.add('game-text2')
      mainGameBox2.appendChild(mainGamePlay)
      mainGamePlay.innerText = `It's a tie! Let's see if there was a treasure...`
      let continueButton5 = document.createElement('button')
      continueButton5.innerText = "Continue"
      continueButton5.classList.add('main-button')
      continueButton5.classList.add('dark')
      mainGameBox2.appendChild(continueButton5)
      continueButton5.addEventListener('click', () => {
      continueButton5.classList.add('hidden')
        finalReveal(round)
      })
     } else if (isWinner() === true) {
      let mainGamePlay = document.createElement('p')
      let mainGameBox2 = document.getElementById('gameplay-area2')
      mainGamePlay.classList.add('game-text2')
      mainGameBox2.appendChild(mainGamePlay)
      mainGamePlay.innerText = `${humanPlayer.name} digs for a treasure!\nLet's see what you found...`
        // then reveal if space is treasure and log to winner's score
      let continueButton5 = document.createElement('button')
      continueButton5.innerText = "Continue"
      continueButton5.classList.add('main-button')
      continueButton5.classList.add('dark')
      mainGameBox2.appendChild(continueButton5)
      continueButton5.addEventListener('click', () => {
      continueButton5.classList.add('hidden')
        finalReveal(round)
      })
     } else {
      let mainGamePlay = document.createElement('p')
      let mainGameBox2 = document.getElementById('gameplay-area2')
      mainGamePlay.classList.add('game-text2')
      mainGameBox2.appendChild(mainGamePlay)
      mainGamePlay.innerText = `${cpuPlayer.name} digs for a treasure!\nLet's see if there was a treasure...`
        // then reveal if space is treasure and do not log to any player's
      let continueButton5 = document.createElement('button')
      continueButton5.innerText = "Continue"
      continueButton5.classList.add('main-button')
      continueButton5.classList.add('dark')
      mainGameBox2.appendChild(continueButton5)
      continueButton5.addEventListener('click', () => {
      continueButton5.classList.add('hidden')
        finalReveal(round)
      })
    }
    } else {
      let mainGamePlay = document.createElement('p')
      let mainGameBox2 = document.getElementById('gameplay-area2')
      mainGamePlay.classList.add('game-text2')
      mainGameBox2.appendChild(mainGamePlay)
      mainGamePlay.innerText = 'Get ready to choose a space...'
      let continueButton5 = document.createElement('button')
      continueButton5.innerText = "Continue"
      continueButton5.classList.add('main-button')
      continueButton5.classList.add('dark')
      mainGameBox2.appendChild(continueButton5)
      continueButton5.addEventListener('click', () => {
      continueButton5.classList.add('hidden')
      mainGamePlay.classList.add('hidden')
      userChoicePrompt()
  })
}
}

// ------------------------
//   **** START GAME ****
// ------------------------


const startGame = () => {
  let announceRound = document.getElementById('game-round')
  announceRound.innerText = `Round ${currentRound}`
  loadMap()
  firstChoice()
}

// =================
// *** END GAME ***
// =================
// Game will end and reveal the total of how many treasures found and determine winner of entire game
const endGame = () => {
  let gameEnd = document.createElement('p')
      let mainGameBox3 = document.getElementById('gameplay-area3')
      gameEnd.classList.add('game-text2')
      mainGameBox3.appendChild(gameEnd)
      gameEnd.innerText = `It's been a great treasure hunt!\nLet's see who won...`
      let continueButton20 = document.createElement('button')
      continueButton20.innerText = "Continue"
      continueButton20.classList.add('main-button')
      continueButton20.classList.add('dark')
      mainGameBox3.appendChild(continueButton20)
      continueButton20.addEventListener('click', () => {
      continueButton20.classList.add('hidden')
      let quitGameButton = getElementById('quit-game')
      quitGameButton.classList.add('hidden')
      let treasureImg = document.createElement('img')
    treasureImg.setAttribute('src', '/images/treasure-chest.png')
    treasureImg.classList.add('chest')
    mainGameBox3.appendChild(treasureImg)
      let finalQuitGameButton = getElementById('final-quit-game')
      finalQuitGameButton.classList.remove('hidden')
  if (humanPlayer.treasuresFound > cpuPlayer.treasuresFound) {
    let gameEnd = document.createElement('p')
      let mainGameBox3 = document.getElementById('gameplay-area3')
      gameEnd.classList.add('game-text2')
      mainGameBox3.appendChild(gameEnd)
      gameEnd.innerText = `${humanPlayer.name} collected ${humanPlayer.treasuresFound} treasures.\n${cpuPlayer.name} collected ${cpuPlayer.treasuresFound} treasures.\n${humanPlayer.name} wins!`
    finalQuitGameButton.addEventListener('click', () => {
      window.location = '#'
    })
  } else if (humanPlayer.treasuresFound === cpuPlayer.treasuresFound) {
    let gameEnd = document.createElement('p')
      let mainGameBox3 = document.getElementById('gameplay-area3')
      gameEnd.classList.add('game-text2')
      mainGameBox3.appendChild(gameEnd)
      gameEnd.innerText = `${cpuPlayer.name} collected ${cpuPlayer.treasuresFound} treasures.\n${humanPlayer.name} collected ${humanPlayer.treasuresFound} treasures.\nIt's a tie! Please play again.`
    finalQuitGameButton.addEventListener('click', () => {
      window.location = '#'
    })
  } else {
    let gameEnd = document.createElement('p')
      let mainGameBox3 = document.getElementById('gameplay-area3')
      gameEnd.classList.add('game-text2')
      mainGameBox3.appendChild(gameEnd)
      gameEnd.innerText = `${humanPlayer.name} collected ${humanPlayer.treasuresFound} treasures.\n${cpuPlayer.name} collected ${cpuPlayer.treasuresFound} treasures.\n${cpuPlayer.name} wins!\nBetter luck next time.`
    finalQuitGameButton.addEventListener('click', () => {
      window.location = '#'
    })
  }
})
}

const getPlayerName = () => {
  let humanNameButton = document.getElementById('submit-name')
  humanNameButton.addEventListener('click', () => {
  humanName = document.getElementById('name-input').value
  if (humanName) {
    let welcomeName = document.getElementById('entered-name')
    welcomeName.innerText = `Welcome to the Treasure Hunt, ${humanName}!`
    let removeBoxes = document.querySelectorAll('.enter-name')
    for (const box of removeBoxes) {
      box.classList.add('hidden');
    }
    let continueButton = document.createElement('button')
    let continueHome = document.getElementById('gameplay-area')
    continueButton.innerText = "Continue"
    continueButton.classList.add('main-button')
    continueButton.classList.add('dark')
    continueHome.appendChild(continueButton)
    continueButton.addEventListener('click', () => {
      window.location = '#gameplay-area2';
      let beginGameButton = document.getElementById('game-play')
      beginGameButton.classList.add('main-button')
      beginGameButton.addEventListener('click', () => {
        beginGameButton.classList.add('hidden')
        startGame()
      })
    })
  } else {
        humanName = "Player 1"
    }
  })
}

// gameplay buttons
let startButton = document.getElementById('next-enter-name');
  startButton.addEventListener('click', () => {
    // startGame()
    window.location = '#gameplay-area';
    getPlayerName()
  });