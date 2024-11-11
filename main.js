window.addEventListener("DOMContentLoaded", main);

const sceneText = document.getElementById("sceneText");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function main () {
  loadMainScene();
}

function loadFirstScene() {
  document.body.style.backgroundImage = "";
  sceneText.textContent = 'Welcome to the On and on and on- game. The game is based on Abbas music, to be more precise - the lyrics to the song On and on and on. Some things are added, some removed. Let\'s start.';
  button1.textContent = "Start";
  button2.style.display = "none";
}

function loadSomethingBadIsHappeningScene() {
  document.body.style.backgroundImage = "url('../Assets/startingscene.webp')";
  sceneText.textContent =
    'You are at a party and this fella says to you: "Something bad is happening, I\'m sure you do agree. People care for nothing, no respect for human rights. Evil times are coming, we are in for darker nights." What is your next move?';
  button1.textContent = "Answer";
  button2.textContent = "Join Amnesty";

  button1.style.display = null;

  button1.onclick = loadImpendingDoomScene;
  button2.onclick = loadAmnestyScene;
}

function loadAmnestyScene() {
  document.body.style.backgroundImage = "url('../Assets/amnesty.jpg')";
  sceneText.textContent = "You have joined Amnesty.";
  button1.style.display = "none";
  button2.textContent = "Start over";

  button2.onclick = loadMainScene;
}

function loadImpendingDoomScene() {
  document.body.style.backgroundImage = "url('../Assets/impendingdoom.webp')";
  sceneText.textContent =
    'You say: "Who are you to talk about an impending doom?" He gets kinda wary as he looks around the room. He says: "I\'m a minister, a big shot in the state..."';
  button1.textContent = "Answer";
  button2.textContent = "Ignore";

  button1.onclick = loadWhatIsWrongWhatIsRightScene;
  button2.onclick = loadOtherGuyScene;
}

function loadWhatIsWrongWhatIsRightScene() {
  document.body.style.backgroundImage = "url('../Assets/whatiswrongwhatisright.webp')";
  sceneText.textContent =
    'You say: "I just can\'t believe it, boy I think it\'s great. Brother can you tell me what is right and what is wrong?" He says: "Keep on rocking baby, till the night is gone"';
  button1.textContent = "Keep on rocking";
  button2.textContent = "Leave to play a game.";

  button1.onclick = loadDanceFloorScene;
  button2.onclick = loadticTacToeScene;
}

function loadOtherGuyScene() {
  document.body.style.backgroundImage = "url('../Assets/otherguy.jpeg')";
  sceneText.textContent =
    "Over in the corner, you can see this other guy. He is kinda flirty, he is giving you the eye.";
  button1.textContent = "Take advantage of the situation";
  button2.textContent = "Leave to play a game.";

  button1.onclick = loadTakeAdvantageOfTheSituationScene;
  button2.onclick = loadticTacToeScene;
}

function loadTakeAdvantageOfTheSituationScene() {
  document.body.style.backgroundImage = "url('../Assets/advantageofthesituation.webp')";
  sceneText.textContent = 
    "So you take advantage of the fact that you're a star. You shake your hair and take a casual stroll up to the bar. And as sure as hell this guy was coming up to you. He says: \"Who am I and who are you and who are we? What's our situation, do we have some time for us?\" What will your answer be?";
  button1.textContent = "I was not exactly waiting for the bus.";
  button2.textContent = "Nope!";

  button1.onclick =
  button2.onclick = loadDanceFloorScene;
}

function loadticTacToeScene() {
  document.body.style.backgroundImage =
  sceneText.textContent = 'You\'re approaching the croupier, asking to play Tic Tac Toe.';
  button1.textContent = 'Leave the nightclub.'
  button2.textContent = 'Go back to previous scene.'
 }
// function loadDanceFloorScene(){
//
//}