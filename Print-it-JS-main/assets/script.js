const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const next = document.querySelector('.arrow_right');
const previous = document.querySelector('.arrow_left');
let index = 0;
const dots = document.querySelector('.dots');

for (let i in slides) {
	const nav = document.createElement("div");
	dots.appendChild(nav)
	nav.className = "dot";

	console.log(nav);
}

const dot = document.getElementsByClassName('dot');
function color(){
	if (dot === currentSlide(index)){
		dot.className = "dot_selected";
	}
}

console.log(dot);





const bannerImg = document.createElement("img");
banner.appendChild(bannerImg);
bannerImg.className = "banner-img";
const currentSlide = n => {
	bannerImg.src = slides[n].image;
}
currentSlide(index)

const nameLine = document.createElement("p");
banner.appendChild(nameLine);
const currentTagLine = n => {
	nameLine.innerHTML = slides[n].tagLine;
}
currentTagLine(index)


next.addEventListener('click', (e) => {
	index = (index + 1) % slides.length
	currentSlide(index)
	currentTagLine(index)
})

previous.addEventListener('click', (e) => {
	index = (index + slides.length - 1) % slides.length
	currentSlide(index)
	currentTagLine(index)
})
