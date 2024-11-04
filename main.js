window.addEventListener("DOMContentLoaded", main);

const sceneText = document.getElementById('sceneText');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function main() {
    document.body.style.backgroundImage = "url('../Assets/startingscene.webp')";
    sceneText.textContent = 'You are at a party and this fella says to you: "Something bad is happening, I\'m sure you do agree. People care for nothing, no respect for human rights. Evil times are coming, we are in for darker nights." What is your next move?';
    button1.textContent = 'Answer';
    button2.textContent = 'Join Amnesty';

    button1.onclick = ImpendingDoomScene;
    button2.onclick = AmnestyScene;
}

function AmnestyScene() {
    document.body.style.backgroundImage = "url('../Assets/amnesty.jpg')";
    sceneText.textContent = 'You have joined Amnesty.';
    button1.style.display = 'none';
    button2.textContent = 'Start over';

    button2.onclick = main;
}

function ImpendingDoomScene() {
    document.body.style.backgroundImage = "url('../Assets/impendingdoom.webp')";
    sceneText.textContent = 'You say "Who are you to talk about an impending doom?" He gets kinda wary as he looks around the room. He says "I\'m a minister, a big shot in the state..."';
    button1.textContent = 'Answer';
    button2.textContent = 'Ignore';

    button1.onclick = loadWhatIsWrongWhatIsRightScene;
    button2.onclick = OtherGuyScene;    
}



function loadWhatIsWrongWhatIsRightScene(){

}

function OtherGuyScene() {
    document.body.style.backgroundImage = "url('../Assets/otherguy.jpeg')";
    // body.style.justifyContent = 'flex-start';
    sceneText.textContent = 'Over in the corner, you can see this other guy. He is kinda flirty, he is giving you the eye.';
    button1.textContent = 'Take advantage of the situation';
    button2.textContent = 'Leave to play BlackJack';
    
    button1.onclick = takeAdvantageOfTheSituationScene;
    button2.onclick = PlayBlackJackScene;

}