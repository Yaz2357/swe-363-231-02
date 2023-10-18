let currentPlayer = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function makeMove(row, col) {
  if (board[row][col] === "") {
    document.getElementById("board").children[row * 3 + col].textContent = currentPlayer;
    board[row][col] = currentPlayer;
    if (checkWin()) {
      showMessage(currentPlayer + " wins!");
    } else if (checkDraw()) {
      showMessage("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function handleKey(event) {
  const key = event.key;
  let row, col;

  switch (key) {
    case "1":
      row = 0;
      col = 0;
      break;
    case "2":
      row = 0;
      col = 1;
      break;
    case "3":
      row = 0;
      col = 2;
      break;
    case "4":
      row = 1;
      col = 0;
      break;
    case "5":
      row = 1;
      col = 1;
      break;
    case "6":
      row = 1;
      col = 2;
      break;
    case "7":
      row = 2;
      col = 0;
      break;
    case "8":
      row = 2;
      col = 1;
      break;
    case "9":
      row = 2;
      col = 2;
      break;
    case "0":
      resetBoard();
      break;
    default:
      return; // Ignore other keys
  }

  makeMove(row, col);
}

document.addEventListener("keydown", handleKey);

function showMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message");

  document.body.appendChild(messageElement);

  setTimeout(function () {
    messageElement.classList.add("fade");
    setTimeout(function () {
      messageElement.remove();
      resetBoard();
    }, 500);
  }, 1000);
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== "" &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      return true;
    }
    if (
      board[0][i] !== "" &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      return true;
    }
  }
  if (
    board[0][0] !== "" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return true;
  }
  if (
    board[0][2] !== "" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        return false;
      }
    }
  }
  return true;
}

function resetBoard() {
  currentPlayer = "X";
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
