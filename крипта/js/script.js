let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
];
let name = document.getElementsByClassName('name');
let price = document.getElementsByClassName('price');
let bar = document.getElementsByClassName('bar');

for( let i=0; i<crypto.length; i++){
  name[i].innerHTML= (crypto[key=i]['name'])
};
for( let i=0; i<crypto.length; i++){
  price[i].innerHTML= (crypto[key=i]['price'])
};
for( let i=0; i<crypto.length; i++){
  bar[i].style.width = (crypto[key=i]['price']/2+'px')
};
