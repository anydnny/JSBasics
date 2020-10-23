let shopping = function(money, watchesCount, watchesPrice, earringsCount, earringsPrice){
	 money = Number(prompt("Введите сумму наличных"));
	 watchesCount = Number(prompt("Введите кол-во золотых часов"));
	 watchesSum = (watchesCount * Number(watchesPrice = prompt("Введите цену часов")));
	 earringsCount = Number(prompt("Введите кол-во серёжек"));
	 earringsSum = (earringsCount * Number(earringsPrice = prompt("Введите цену серёжек")));
	 let totalSum = Number(watchesSum + earringsSum);

	if (money >= totalSum){
		alert("Enough $$$");
	}else{
		alert("Not enough $$$");
	}
}
shopping();