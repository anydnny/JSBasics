let totalCash = Number(prompt("Введите сумму наличных"));
let watchesCount = Number(prompt("Введите кол-во золотых часов"));
let earringsCount = Number(prompt("Введите кол-во серёжек"));
let watchesSum = (watchesCount * Number(prompt("Введите цену часов")));
let earringsSum = (earringsCount * Number(prompt("Введите цену серёжек")));
let totalSum = Number(watchesSum + earringsSum);
alert(totalCash >= totalSum);