let answer = prompt('Введите число')
answer = parseFloat (answer)
if (answer < 0){
	answer = answer*(-1)
} else {
	answer = answer
}
alert(answer)