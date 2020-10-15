const bodyColor = document.querySelector("body");
bodyColor.style.backgroundColor = "#696969";

const pageColor = document.querySelector(".page");
pageColor.style.color = "ghostwhite";

const name = document.querySelector(".name");
name.innerHTML = "DJ Rashad";

const image = document.querySelector("img");
image.setAttribute("src","https://musicscore.ms/uploads/musicscore/performer_photos/dj-rashad-7039.jpg");

const bio = document.querySelector(".short-bio");
bio.className += " animated";