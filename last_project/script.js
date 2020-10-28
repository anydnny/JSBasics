
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
		let city = "Moscow";
		let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse ( xhr.responseText );
		if ( parseInt ( DATA.main.temp-273 )>=15 ){
 		this.happiness++;
 		return this.happiness;
		} else {
  		/*фейспалм*/
  		}
	}
}
let bio = [
	name: 'Vasya',
	cat: true,
	chill: true,
	money: true,
];
const form = document.forms[0];
form.onsubmit = (e) => {
	e.preventDefault();
	bio.name = String(form.elements.name.value);
	bio.cat = 
	/*let chill =;
	let money =;*/
}
