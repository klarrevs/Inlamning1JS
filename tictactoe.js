window.addEventListener('DOMContentLoaded', initializeGame);

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
    running = true;
    cells.forEach(function (cell) {
      cell.addEventListener('click', clickedCell);
    });
    restartButton.addEventListener('click',restartGame);
    statusText.textContent = `${currentPlayer}'s turn`; //template literal

  }