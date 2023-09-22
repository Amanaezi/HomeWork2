"use strict";

const board = [];
const numRows = 4;
const numCols = 4;

for (let i = 0; i < numRows; i++) 
{
  board[i] = [];
  for (let j = 0; j < numCols; j++) 
  {
    const randomValue = Math.floor(Math.random() * 2);
    board[i][j] = randomValue === 0 ? 'O' : 'X';
  }
}

let countX = 0;
let countO = 0;

for (let i = 0; i < numRows; i++) 
{
  for (let j = 0; j < numCols; j++) 
  {
    if (board[i][j] === 'X') 
    {
      countX++;
    } 
    else if (board[i][j] === 'O') 
    {
      countO++;
    }
  }
}

let result = '';

if (countX > countO) 
{
  result = 'Крестиков больше ноликов.';
} 
else if (countO > countX) 
{
  result = 'Ноликов больше крестиков.';
} 
else 
{
  result = 'Количество крестиков и ноликов одинаково.';
}

console.log('Игровое поле:');
console.log(board);
console.log('Количество крестиков:', countX);
console.log('Количество ноликов:', countO);
console.log(result);
