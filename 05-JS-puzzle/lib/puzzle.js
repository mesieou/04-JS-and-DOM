// Select all the tiles
const tiles = document.querySelectorAll('td');

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  const tileRowIndex = tile.parentNode.rowIndex
  const tileCellIndex = tile.cellIndex
  const table = document.querySelector('tbody')
  const upperCell = tileRowIndex == 0 ? undefined : table.rows[tileRowIndex - 1].cells[tileCellIndex]
  const lowerCell = tileRowIndex >= 3 ? undefined : table.rows[tileRowIndex + 1].cells[tileCellIndex]
  const leftCell = table.rows[tileRowIndex].cells[tileCellIndex - 1]
  const rightCell = table.rows[tileRowIndex].cells[tileCellIndex + 1]

  return (upperCell?.classList?.contains('empty') ||
          lowerCell?.classList?.contains('empty') ||
          leftCell?.classList?.contains('empty') ||
          rightCell?.classList?.contains('empty')
          )
}

const moveTile = (tile) => {
  // TOOD: Move the tile
  const emptyTile = document.querySelector('.empty')
  emptyTile.textContent = tile.textContent
  emptyTile.classList.toggle('empty')
  tile.textContent = ''
  tile.classList.toggle('empty')
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
