
let icon = document.querySelector('.icon');
class Person {
	constructor (name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		this.happiness++;
		return this.happiness;
	}
	hasRest() {
		this.happiness++;
		return this.happiness;
	}
	hasMoney() {
		this.happiness++;
		return this.happiness;
	}
	isSunny() {
		const APIKey = 'df1931b6625a30023d5865c09cb5430a';
		let city = "Moscow";
		let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse (xhr.responseText);
		if (parseInt(DATA.main.temp - 273) >= 15) {
 		this.happiness++;
 		return this.happiness;
		} else {
  			icon.innerHTML = '🥶';
  			return this.happiness;
  		}
	}
}
const form = document.forms[0];
form.onsubmit = function(e) {
	e.preventDefault();
	let name = form.elements.name.value;
	let cat = form.elements.cat.value;
	let rest = form.elements.rest.value;
	let money = form.elements.money.value;
	const user = new Person(String(name));
	console.log(cat);
	console.log(rest);
	console.log(money);
	(cat === 'yes') ? user.hasCat() : console.log('очень жаль :(');
	(rest === 'yes') ? user.hasRest() : console.log('пора отдохнуть');
	(money === 'yes') ? user.hasMoney() : console.log('это печально');
	user.isSunny();
	console.log(user.happiness);
	let personName = document.querySelector('.personName');
	personName.innerHTML = user.name + ":";
	switch(user.happiness) {
		case (user.happiness = 4):
			icon.innerHTML = '😄';
			break;
		case (user.happiness = 3):
			icon.innerHTML = '😐';
			break;
		case (user.happiness = 2):
			icon.innerHTML = '😐';
			break;
		case (user.happiness = 1):
			icon.innerHTML = '☹️';
			break;
		}
	}	

