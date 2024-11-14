window.addEventListener('DOMContentLoaded', initializeGame);

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('statusText');
const restartButton = document.getElementById('restartButton');
/** Array innehållande arrays med möjliga sätt att vinna.
 * @const {index}
 */
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
/** Tom array för varje ruta (cell) 0-8.
 * 
 * @type {number[]}
 */
let options = ['', '', '', '', '', '', '', '','']; // tom array för varje rutval(9 st)
let currentPlayer = 'X';
let running = false;

/** Sätter eventlyssnare (klick) på varje ruta (cell) samt på restartButton. 
 * Anropar restartGame-function via restartButton.
 * Uppdaterar statusText för att visa vems tur det är.
 * Sätter running till true för att visa att spelet är igång.
 * 
 * @function
 */
function initializeGame() {
    cells.forEach(function (cell) {
      cell.addEventListener('click', cellClicked);
    });
    restartButton.addEventListener('click',restartGame);
    statusText.textContent = `${currentPlayer}'s turn`; //template literal
    running = true;

  }
function cellClicked() {
    const cellIndex = this.getAttribute('cellIndex');

    if(options[cellIndex] != '' || !running){
      return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
  
}
function changePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}'s turn`;
  
}
/** Går igenom de olika vinstvillkoren. Kontrollerar om de matchar villkoren i if-satsen. 
 * Är rutorna tomma fortsätter spelet. Om villkoren för vinst uppfylls sätts running = false.
 * Om options inte har tomma rutor ändras statusText till `draw` och spelomgången avslutas genom att running = false. 
 * Om inget stämmer byts spelare genom att anropa funktionen changePlayer.
 * 
 * @function
 */
function checkWinner() {
    let roundWon = false;

    for(let i=0; i < winConditions.length; i++){
      const condition = winConditions[i];
      const cellA = options[condition[0]];
      const cellB = options[condition[1]];
      const cellC = options[condition[2]];

      if(cellA === '' || cellB === '' || cellC === ''){
        continue;
      }
      if(cellA === cellB && cellB === cellC){
        roundWon = true;
        break;
      }
    }
    if(roundWon){
        statusText.textContent = `Woho! ${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes('')){
        statusText.textContent = `Draw`;
        running = false;
    }
    else{
        changePlayer();
    }

}
function restartGame() {
    currentPlayer = 'X';
    options = ['', '', '', '', '', '', '', '',''];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(function (cell) {
      cell.textContent = '';
      running = true;
    }
)};