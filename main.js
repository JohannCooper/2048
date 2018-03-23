import GameBoard from "./GameBoard.js";
import {copy2DArray, equal2DArrays} from "./arrayOperations.js";

const GAMEBOARD = new GameBoard(4, 4);
let OLDBOARD = copy2DArray(GAMEBOARD.table);
console.clear();
console.table(GAMEBOARD.table);

window.addEventListener("keyup", k => {
	OLDBOARD = copy2DArray(GAMEBOARD.table);
	switch (k.key) {
		case "ArrowUp":
			GAMEBOARD.shiftUp();
			if (!equal2DArrays(OLDBOARD, GAMEBOARD.table)) {
				console.clear();
				GAMEBOARD.placeRandomTile();
				console.table(GAMEBOARD.table);
			}
			break;
		case "ArrowDown":
			GAMEBOARD.shiftDown();
			if (!equal2DArrays(OLDBOARD, GAMEBOARD.table)) {
				console.clear();
				GAMEBOARD.placeRandomTile();
				console.table(GAMEBOARD.table);
			}
			break;
		case "ArrowLeft":
			GAMEBOARD.shiftLeft();
			if (!equal2DArrays(OLDBOARD, GAMEBOARD.table)) {
				console.clear();
				GAMEBOARD.placeRandomTile();
				console.table(GAMEBOARD.table);
			}
			break;
		case "ArrowRight":
			GAMEBOARD.shiftRight();
			if (!equal2DArrays(OLDBOARD, GAMEBOARD.table)) {
				console.clear();
				GAMEBOARD.placeRandomTile();
				console.table(GAMEBOARD.table);
			}
			break;
	}
});