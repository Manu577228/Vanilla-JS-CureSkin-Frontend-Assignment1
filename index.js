const chessboard = document.getElementById("chessboard");

// Function to create the chessboard
function createChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      // Create a square element
      const square = document.createElement("div");
      square.className = "square";

      // Set creamish color for light squares and dark color for dark squares
      if ((row + col) % 2 === 0) {
        square.classList.add("light");
      } else {
        square.classList.add("dark");
      }

      // Add hover effects
      square.addEventListener("mouseenter", function () {
        highlightSquare(square, row, col);
      });
      square.addEventListener("mouseleave", function () {
        unhighlightSquare(square);
      });

      // Append the square to the chessboard
      chessboard.appendChild(square);
    }
  }
}

// Function to highlight squares attacked by a bishop
function highlightSquare(square, row, col) {
  // Clear previous attacked squares
  clearAttackedSquares();

  // Highlight squares attacked by a bishop diagonally
  for (let i = 1; i < 8; i++) {
    highlightDiagonal(square, row + i, col + i);
    highlightDiagonal(square, row - i, col + i);
    highlightDiagonal(square, row + i, col - i);
    highlightDiagonal(square, row - i, col - i);
  }
}

// Function to highlight a diagonal square
function highlightDiagonal(currentSquare, row, col) {
  const targetSquare = getSquare(row, col);
  if (targetSquare) {
    targetSquare.classList.add("attacked");
  }
}

// Function to unhighlight squares
function unhighlightSquare(square) {
  square.classList.remove("hovered");
}

// Function to get a square element by row and column
function getSquare(row, col) {
  if (row >= 0 && row < 8 && col >= 0 && col < 8) {
    const index = row * 8 + col;
    return chessboard.children[index];
  }
  return null;
}

// Function to clear previous attacked squares
function clearAttackedSquares() {
  const attackedSquares = document.querySelectorAll(".attacked");
  attackedSquares.forEach((square) => {
    square.classList.remove("attacked");
  });
}

// Call the function to create the chessboard
createChessboard();
