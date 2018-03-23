export function copy2DArray(arr) {
	const transferArray = [];
	arr.forEach((e1, i) => {
		transferArray.push([]);
		arr[i].forEach((e2, j) => transferArray[i][j] = e2);
	});
	return transferArray;
}

export function equal2DArrays(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr1[i].length; j++) {
			if (arr1[i][j] !== arr2[i][j]) {
				return false;
			}
		}
	}
    return true;
}
