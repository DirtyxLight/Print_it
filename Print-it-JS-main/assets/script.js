/*const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
*/
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('const.json');
const slides = await reponse.json();


const bannerImg = document.createElement("img");
bannerImg.src = slides.image;

const nameLine = document.createElement("p");
nameLine.innerText = slides.tagLine;

const carousel = document.querySelector('#banner');

banner.appendChild(bannerImg);
banner.appendChild(nameLine);




const next = document.querySelector('.arrow_right');
const previous = document.querySelector('.arrow_left');

let index = 0;