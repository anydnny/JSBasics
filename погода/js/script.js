const APIKey = 'df1931b6625a30023d5865c09cb5430a';
const form = document.forms[0];
form.onsubmit = function(e) {
	e.preventDefault();
	let city = form.elements.city.value;
	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if (xhr.status != 200){
 		console.log(xhr.status +' '+ xhr.statusText);
	} else {
	  	let DATA = JSON.parse(xhr.responseText);
	  	let tResult = document.querySelector('.tempResult');
	  	tResult.innerHTML = parseInt(DATA.main.temp-273);
	  	let wResult = document.querySelector('.windResult');
	  	wResult.innerHTML = parseInt(DATA.wind.speed);
	}
};





