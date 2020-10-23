let shopping = function(money, watchesCount, watchesPrice, earringsCount, earringsPrice){
	let watchesSum = watchesCount * watchesPrice;
	let earringsSum = earringsCount * earringsPrice;
	let totalSum = watchesSum + earringsSum;
	switch(answer){
		case (money>=totalSum):
			alert("Enough $$$");
			break;
		default:
			alert("Not enough $$$")
	}	
}
shopping(1000, 2, 3, 100, 100)