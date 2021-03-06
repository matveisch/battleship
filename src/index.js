import {Gameboard} from "./Gameboard";
import {
	displayBoard,
	gameBoardContainer,
	enemyGameBoardContainer,
} from "./dom";
import './style.css';
import {updateBoard} from "./help-functions";
import {changeAxis} from "./ship-placement";

//creating boards
const firstGameBoard = Gameboard();
const enemyBoard = Gameboard();

//display both boards
displayBoard(firstGameBoard.board, gameBoardContainer, 'my-board');
displayBoard(enemyBoard.board, enemyGameBoardContainer, 'enemy-board');

changeAxis();

enemyBoard.placeShip(4, {value: 'x'}, {x: 1, y: 2});

enemyBoard.placeShip(3, {value: 'y'}, {x: 1, y: 4});
enemyBoard.placeShip(3, {value: 'y'}, {x: 7, y: 0});

enemyBoard.placeShip(2, {value: 'x'}, {x: 6, y: 4});
enemyBoard.placeShip(2, {value: 'y'}, {x: 9, y: 5});
enemyBoard.placeShip(2, {value: 'y'}, {x: 5, y: 7});

enemyBoard.placeShip(1, {value: 'y'}, {x: 0, y: 0});
enemyBoard.placeShip(1, {value: 'y'}, {x: 9, y: 9});
enemyBoard.placeShip(1, {value: 'y'}, {x: 0, y: 9});
enemyBoard.placeShip(1, {value: 'y'}, {x: 9, y: 0});

updateBoard(enemyGameBoardContainer, enemyBoard.board, 'enemy-board');

export {enemyBoard, firstGameBoard}