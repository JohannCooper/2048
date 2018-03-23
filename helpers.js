export function shiftOverBlanks(row) {
	for (let i = row.length; i > -1; i--) {
		let j = i;
		while (row[j + 1] === null) {
			row[j + 1] = row[j];
			row[j] = null;
			j += 1
		}
	}
}

export function combineAdjacentTiles(row) {
	for (let i = row.length; i > -1; i--) {
		if (row[i + 1] != null && row[i + 1] === row[i]) {
			row[i + 1] += row[i];
			row[i] = null;
		}
	}
}

export function convertColumnToRow(arr, columnIndex) {
	const convertedColumn = [];
	for (let i = 0; i < arr.length; i++) {
		convertedColumn.push(arr[i][columnIndex]);
	}
	return convertedColumn;
}