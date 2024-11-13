window.addEventListener('DOMContentLoaded', initializeGame);
// window.initializeGame = initializeGame;

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
        statusText.textContent = `${currentPlayer} wins`;
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

  }
