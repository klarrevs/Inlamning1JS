window.addEventListener("DOMContentLoaded", main);

const sceneText = document.getElementById('sceneText');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function main() {
    document.body.style.backgroundImage = "url('../Assets/startingscene.webp')";
    sceneText.textContent = 'You are at a party and this fella says to you: "Something bad is happening, I\'m sure you do agree. People care for nothing, no respect for human rights. Evil times are coming, we are in for darker nights."';
    button1.textContent = 'Answer';
    button2.textContent = 'Join Amnesty';

    button1.onclick = loadImpendingDoomScene;
    button2.onclick = loadAmnestyScene;
}

function loadImpendingDoomScene() {
    document.body.style.backgroundImage = "url('../Assets/impendingdoom.webp')";
    sceneText.textContent = 'I said, "Who are you to talk about impending doom?" He got kinda wary as he looked around the room. He said, "I\'m a minister, a big shot in the state"';
    button1.textContent = 'Answer';
    button2.textContent = 'Ignore';

    button1.onclick = loadWhatIsWrongWhatIsRightScene;
    button2.onclick = loadOtherGuyScene;    
}

function loadAmnestyScene() {
    document.body.style.backgroundImage = "url('../Assets/amnesty.jpg')";
    sceneText.textContent = 'You have joined Amnesty.';
    button1.style.display = 'none';
    button2.textContent = 'Start over';

    // button1.onclick = loadImpendingDoomScene;
    button2.onclick = main;

}

function loadWhatIsWrongWhatIsRightScene(){

}

function loadOtherGuyScene() {
    document.body.style.backgroundImage = "url('../Assets/amnesty.jpg')";
    sceneText.textContent = 'Over in the corner, you can see this other guy. He is kinda flirty, he is giving you the eye.';
    button1.textContent = 'Take advantage of the situation';
    button2.textContent = 'Keep on rocking (on and on and on)';
    
    button1.onclick = 

}