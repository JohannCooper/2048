import {shiftOverBlanks, combineAdjacentTiles, convertColumnToRow} from "./helpers.js";

export default class GameBoard {
	constructor(rows, columns) {
		this.rows = rows;
		this.columns = columns;
		this.table = [];
		this.generate();
	}
	generate() {
		for (let i = 0; i < this.rows; i++) {
			this.table.push([]);
			for (let j = 0; j < this.columns; j++) {
				this.table[i].push(null);
			}
		}
		this.placeRandomTile();
		this.placeRandomTile();
	}
	placeRandomTile() {
		const randNum = Math.floor(Math.random() * this.rows * this.columns);
		let coords = [Math.floor(randNum % this.columns), Math.floor(randNum / this.rows)]

		if (this.table[coords[0]][coords[1]] != null) {
			coords = this.placeRandomTile();
		}
		
		this.table[coords[0]][coords[1]] = 2;

		return coords;
	}
	shiftRight() {
		for (let i = 0; i < this.rows; i++) {
			shiftOverBlanks(this.table[i]);
			combineAdjacentTiles(this.table[i]);
			shiftOverBlanks(this.table[i]);
		}
	}
	shiftLeft() {
		for (let i = 0; i < this.rows; i++) {
			this.table[i].reverse();
			shiftOverBlanks(this.table[i]);
			combineAdjacentTiles(this.table[i]);
			shiftOverBlanks(this.table[i]);
			this.table[i].reverse();
		}
	}
	shiftDown() {
		for (let i = 0; i < this.columns; i++) {
			const convertedColumn = convertColumnToRow(this.table, i);

			shiftOverBlanks(convertedColumn);
			combineAdjacentTiles(convertedColumn);
			shiftOverBlanks(convertedColumn);

			for (let j = 0; j < this.rows; j++) {
				this.table[j][i] = convertedColumn[j];
			}
		}
	}
	shiftUp() {
		for (let i = 0; i < this.columns; i++) {
			const convertedColumn = convertColumnToRow(this.table, i);

			convertedColumn.reverse();
			shiftOverBlanks(convertedColumn);
			combineAdjacentTiles(convertedColumn);
			shiftOverBlanks(convertedColumn);
			convertedColumn.reverse();

			for (let j = 0; j < this.rows; j++) {
				this.table[j][i] = convertedColumn[j];
			}
		}
	}
}