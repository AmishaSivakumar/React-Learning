function array_range(start, len) {
	var arr = new Array(len);
	for (var i = 0; i < len; i++, start++) {
		arr[i] = start;
	}
	return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));

function rangeBetween(start, end) {

	if (start > end) {
		var arr = new Array(start - end + 1);
		for (var i = 0; i < arr.length; i++, start--) {
			resarrult[i] = start;
		}
		return arr;
	}
	else {
		var arro = new Array(end - start + 1);

		for (var j = 0; j < arro.length; j++, start++) {
			arro[j] = start;
		}
		return arro;
	}
}

console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));