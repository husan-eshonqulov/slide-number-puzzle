export function createBoard(size) {
  const board = [];

  for (let i = 0; i < size; i++) {
    const childBoard = [];
    for (let j = 0; j < size; j++) {
      childBoard.push(i * size + j + 1);
    }
    board.push(childBoard);
  }

  board[size - 1][size - 1] = "";

  return board;
}

export function swap(board, index1, index2) {
  const size = board.length;
  const newBoard = [];

  for (let i = 0; i < size; i++) {
    newBoard[i] = [...board[i]];
  }

  const tmp = newBoard[index1[0]][index1[1]];
  newBoard[index1[0]][index1[1]] = newBoard[index2[0]][index2[1]];
  newBoard[index2[0]][index2[1]] = tmp;

  return newBoard;
}

export function isSwappable(board, index) {
  const size = board.length;

  if (index[0] - 1 >= 0 && board[index[0] - 1][index[1]] === "") return true;

  if (index[0] + 1 < size && board[index[0] + 1][index[1]] === "") return true;

  if (index[1] - 1 >= 0 && board[index[0]][index[1] - 1] === "") return true;

  if (index[1] + 1 < size && board[index[0]][index[1] + 1] === "") return true;

  return false;
}

export function getSwappableIndexes(board, index) {
  const size = board.length;

  if (index[0] - 1 >= 0 && board[index[0] - 1][index[1]] === "")
    return [index, [index[0] - 1, index[1]]];

  if (index[0] + 1 < size && board[index[0] + 1][index[1]] === "")
    return [index, [index[0] + 1, index[1]]];

  if (index[1] - 1 >= 0 && board[index[0]][index[1] - 1] === "")
    return [index, [index[0], index[1] - 1]];

  if (index[1] + 1 < size && board[index[0]][index[1] + 1] === "")
    return [index, [index[0], index[1] + 1]];
}

export function mixBoard(board, times) {
  const size = board.length;
  let newBoard = [];

  for (let i = 0; i < size; i++) {
    newBoard[i] = [...board[i]];
  }

  for (let i = 0; i < times; i++) {
    const spaceInd = getSpaceIndex(newBoard);
    const randInd = getRandomIndex(newBoard, spaceInd);
    newBoard = swap(newBoard, spaceInd, randInd);
  }

  return newBoard;
}

export function getSpaceIndex(board) {
  const size = board.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === "") return [i, j];
    }
  }
}

export function getRandomIndex(board, index) {
  const directions = ["u", "d", "l", "r"];
  let randInd;
  do {
    const directIndex = Math.floor(Math.random() * 4);
    randInd = getDirectedIndex(index, directions[directIndex]);
  } while (!isValidIndex(board, randInd));

  return randInd;
}

export function isValidIndex(board, index) {
  const size = board.length;
  return index[0] >= 0 && index[0] < size && index[1] >= 0 && index[1] < size;
}

export function getDirectedIndex(index, direct) {
  if (direct === "u") return [index[0] - 1, index[1]];
  if (direct === "d") return [index[0] + 1, index[1]];
  if (direct === "l") return [index[0], index[1] - 1];
  if (direct === "r") return [index[0], index[1] + 1];
}

export function isCorretBoard(board) {
  const size = board.length;
  const corrBoard = createBoard(size);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] !== corrBoard[i][j]) return false;
    }
  }

  return true;
}

export function formatTime(time) {
  let msec = time % 100;
  let sec = Math.floor(time / 100);

  if (msec >= 0 && msec < 10) msec = "0" + msec;
  if (sec >= 0 && sec < 10) sec = "0" + sec;

  return {
    sec: sec,
    msec: msec,
  };
}
