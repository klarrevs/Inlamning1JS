window.addEventListener("DOMContentLoaded", main);

const sceneText = document.getElementById("sceneText");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const abbaInput = document.getElementById('abbaInput');
let abbaList = [];

function main() {
  loadSaveAbbaSongs();
}

function loadFirstScene() {
  document.body.style.backgroundImage = "url('../Assets/startingscene.webp')";
  sceneText.textContent = 'Welcome to the On and on and on- game. The game is based on Abbas music, to be more precise - the lyrics to the song On and on and on. Some things are added, some removed. Let\'s start.';
  button1.textContent = "Start";
  button2.style.display = "none";
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';

  button1.onclick = loadSomethingBadIsHappeningScene;
}

function loadSomethingBadIsHappeningScene() {
  document.body.style.backgroundImage = "url('../Assets/startingscene.webp')";
  sceneText.textContent =
    'You are at a party and this fella says to you: "Something bad is happening, I\'m sure you do agree. People care for nothing, no respect for human rights. Evil times are coming, we are in for darker nights." What is your next move?';
  button1.textContent = "Answer";
  button2.textContent = "Join Amnesty";

  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';
  button1.style.display = null;
  button2.style.display = null;

  button1.onclick = loadImpendingDoomScene;
  button2.onclick = loadAmnestyScene;
}

function loadAmnestyScene() {
  document.body.style.backgroundImage = "url('../Assets/amnesty.jpg')";
  sceneText.textContent = "You have joined Amnesty.";
  button1.style.display = "none";
  button2.textContent = "Start over";
  
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';


  button2.onclick = loadSomethingBadIsHappeningScene;
}

function loadImpendingDoomScene() {
  document.body.style.backgroundImage = "url('../Assets/impendingdoom.webp')";
  sceneText.textContent =
    'You say: "Who are you to talk about an impending doom?" He gets kinda wary as he looks around the room. He says: "I\'m a minister, a big shot in the state..."';
  button1.textContent = "Answer";
  button2.textContent = "Ignore";
  
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';

  button1.onclick = loadWhatIsWrongWhatIsRightScene;
  button2.onclick = loadOtherGuyScene;
}

function loadWhatIsWrongWhatIsRightScene() {
  document.body.style.backgroundImage = "url('../Assets/whatiswrongwhatisright.webp')";
  sceneText.textContent =
    'You say: "I just can\'t believe it, boy I think it\'s great. Brother can you tell me what is right and what is wrong?" He says: "Keep on rocking baby, till the night is gone"';
  button1.textContent = "Keep on rocking";
  button2.textContent = "Leave to play a game.";
  
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';

  button1.onclick = loadDanceFloorScene;
  button2.onclick = loadTicTacToeScene;
}

function loadOtherGuyScene() {
  document.body.style.backgroundImage = "url('../Assets/otherguy.jpeg')";
  sceneText.textContent =
    "Over in the corner, you can see this other guy. He is kinda flirty, he is giving you the eye.";
  button1.textContent = "Take advantage of the situation";
  button2.textContent = "Leave to play a game.";
  
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';

  button1.onclick = loadTakeAdvantageOfTheSituationScene;
  button2.onclick = loadTicTacToeScene;
}

function loadTakeAdvantageOfTheSituationScene() {
  document.body.style.backgroundImage = "url('../Assets/advantageofthesituation.webp')";
  sceneText.textContent = 
    "So you take advantage of the fact that you're a star. You shake your hair and take a casual stroll up to the bar. And as sure as hell this guy was coming up to you. He says: \"Who am I and who are you and who are we? What's our situation, do we have some time for us?\" What will your answer be?";
  button1.textContent = "I was not exactly waiting for the bus.";
  button2.textContent = "Nope!";
  
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';

  button1.onclick = loadNotWaitingForTheBus;
  button2.onclick = loadDanceFloorScene;
}

function loadNotWaitingForTheBus() {
  document.body.style.backgroundImage = "url('..Assets/....')";
  sceneText.textContent = "";
  button1.textContent = 'End game';
  button2.textContent = 'Restart game';
  
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';

  button1.onclick = loadSaveAbbaSongs;
  button2.onclick = loadFirstScene;
}

function loadDanceFloorScene() {
  document.body.style.backgroundImage = "url('../Assets/dancefloor.webp')";
  sceneText.textContent = 'You\'ll keep on dancing the whole night!'
  button1.textContent = 'End game';
  button2.textContent = 'Restart game';
  
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = 'none';

  button1.onclick = loadSaveAbbaSongs;
  button2.onclick = loadFirstScene; 
}

function loadTicTacToeScene() {
  const cells = document.querySelectorAll('.cell');
  const statusText = document.getElementById('statusText');
  const restartButton = document.getElementById('restartButton');
  const winConditions = [
    [0, 1, 2], //vågrätt
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //lodrätt
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8], //diagonalt
    [2, 4, 6]
  ];
  let options = ['', '', '', '', '', '', '', '','']; // tom array för varje rutval(9 st)
  let currentPlayer = 'X';
  let running = false;

  sceneContainer.style.display = 'none';
  gameInGameContainer.style.display = null;
  document.body.style.backgroundImage = "url('../Assets/tictactoe.webp')";
  sceneText.textContent = 'You\'re approaching the croupier, asking to play Tic Tac Toe.';
  button1.textContent = 'Leave the nightclub';
  button2.textContent = 'Go back to previous scene';

  inputContainer.style.display = 'none';

  button1.onclick = loadSaveAbbaSongs;
  button2.onclick = loadOtherGuyScene, loadWhatIsWrongWhatIsRightScene;

  function startTicTacToe() {

  }

  function clickedCell() {

  }

  function cellChosen() {

  }

  function changePlayer() {

  }

  function restartGame() {

  }
}

function loadSaveAbbaSongs() {
  document.body.style.backgroundImage = "url('../Assets/abba.webp')";
  sceneText.textContent = 'Before you leave us for tonight, we would like you to write the titles of a few other ABBA songs that you know of.';
  button1.textContent ='Bye';
  
  button2.style.display = 'none';
  gameInGameContainer.style.display = 'none';
  inputContainer.style.display = null;

  saveSongButton.onclick = saveAbbaSongs; 
}

function saveAbbaSongs() {
  abbaList.push(abbaInput.value);
  abbaInput.value = '';
}