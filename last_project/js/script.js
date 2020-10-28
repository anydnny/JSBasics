
let icon = document.querySelector('.icon');
class Person {
	constructor ( name ) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		this.happiness++
		return this.happiness
	}
	hasRest() {
		this.happiness++
		return this.happiness
	}
	hasMoney() {
		this.happiness++
		return this.happiness
	}
	isSunny() {
		const APIKey = 'df1931b6625a30023d5865c09cb5430a';
		let city = "Miami";
		let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse ( xhr.responseText );
		if ( parseInt ( DATA.main.temp - 273 ) >= 15 ){
 		this.happiness++;
 		return this.happiness;
		} else {
  			icon.innerHTML = '🥶';
  		}
	}
}
const form = document.forms[0];
form.onsubmit = function(e) {
	e.preventDefault();
	let name = form.elements.name.value;
	let cat =form.elements.cat.value;
	let rest =form.elements.rest.value;
	let money = form.elements.money.value;
	const user = new Person( String(name) );
	(name = 'yes') ? user.hasCat() : none;
	(rest = 'yes') ? user.hasRest() : none;
	(money = 'yes') ? user.hasMoney() : none;
	user.isSunny();
	let personName = document.querySelector('.personName');
	personName.innerHTML = user.name + ":";
	switch(user.happiness){
		case (happiness = 3):
			icon.innerHTML = '😄';
			break;
		case (happiness = 2):
			icon.innerHTML = '😐';
			break;
		case (happiness = 1):
			icon.innerHTML = '☹️';
			break;
		}
	}	

